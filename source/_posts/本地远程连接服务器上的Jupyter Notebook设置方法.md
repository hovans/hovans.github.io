---
title: 本地远程连接服务器上的Jupyter Notebook设置方法
tags: linux
---

作者:彭滴

使用Jupyter可以在本地电脑直接新建和编辑linux服务器的代码，比如python和R,非常方便；

<!--more--> 

**本机为：Win10
服务器：CentOS Linux release 7.3.1611**

#### 1.远程服务器安装Jupyter
本人之前安装Anaconda自带了jupyter notebook，因此可以直接使用。如果没有，可通过以下命令安装：
`pip install jupyter notebook`
#### 2.服务器端Jupyter配置（重点）
##### （1）创建配置文件
默认情况下，配置文件 ~/.jupyter/jupyter_notebook_config.py 并不存在，需要自行创建。
运行以下命令创建：
`jupyter notebook --generate-config`
若root用户执行以上命令会提示 
>Running as root it not recommended. Use --allow-root to bypass.

只需加上 --allow-root 选项即可

执行成功后提示以下信息：
>Writing default config to: /home/username/.jupyter/jupyter_notebook_config.py

##### （2）生成密码
服务器端命令行输入:
`jupyter notebook password`

此时会提示输入密码及确认密码，密码设置完成后提示将生成的密码写入/home/username/.jupyter/jupyter_notebook_config.json，注意username视用户而定，会直接出现在提示信息中。

```
$ Jupyter notebook password
Enter password: ****
Verify password: ****
[NotebookPasswordApp] Wrote hashed password to /home/username/.jupyter/jupyter_notebook_config.json
```

打开存储密码的json文件，可以看到：
>"password": "sha1:8d076d7433e6:7f0ed1c8e081133cec66f78748b01d7e27bdfec3"

复制此密文

##### （3）修改配置文件
在/home/username/.jupyter/jupyter_notebook_config.py中找到以下行，修改为：
```
c.NotebookApp.ip='*' #允许访问的IP地址，设置为*代表允许任何客户端访问
c.NotebookApp.password = u'sha1:8d...刚才生成密码时复制的密文'
c.NotebookApp.open_browser = False
c.NotebookApp.port =8888 #可自行指定一个端口, 访问时使用该端口
c.NotebookApp.allow_remote_access = True
```

#### 3.服务器端启动jupyter notebook
命令如下：
`jupyter notebook`

**此时我遇到了两个问题**
**（1)root用户可直接启动，普通用户则报错：**

```
[I 12:50:36.604 NotebookApp] 把notebook 服务cookie密码写入 /run/user/1000/jupyter/notebook_cookie_secret
[E 12:50:36.604 NotebookApp] Failed to write cookie secret to /run/user/1000/jupyter/notebook_cookie_secret: [Errno 13] Permission denied: '/run/user/1000/jupyter/notebook_cookie_secret'
[W 12:50:36.604 NotebookApp] 不能在 /run/user/1000/jupyter/notebook_cookie_secret 设置权限
Traceback (most recent call last):
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/traitlets.py", line 528, in get
    value = obj._trait_values[self.name]
KeyError: 'allow_remote_access'
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 864, in _default_allow_remote
    addr = ipaddress.ip_address(self.ip)
  File "/home/user/anaconda3/lib/python3.6/ipaddress.py", line 54, in ip_address
    address)
ValueError: '' does not appear to be an IPv4 or IPv6 address
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  File "/home/user/anaconda3/bin/jupyter-notebook", line 11, in <module>
    sys.exit(main())
  File "/home/user/anaconda3/lib/python3.6/site-packages/jupyter_core/application.py", line 266, in launch_instance
    return super(JupyterApp, cls).launch_instance(argv=argv, **kwargs)
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/config/application.py", line 657, in launch_instance
    app.initialize(argv)
  File "</home/user/anaconda3/lib/python3.6/site-packages/decorator.py:decorator-gen-7>", line 2, in initialize
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/config/application.py", line 87, in catch_config_error
    return method(app, *args, **kwargs)
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 1628, in initialize
    self.init_webapp()
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 1378, in init_webapp
    self.jinja_environment_options,
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 159, in __init__
    default_url, settings_overrides, jinja_env_options)
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 252, in init_settings
    allow_remote_access=jupyter_app.allow_remote_access,
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/traitlets.py", line 556, in __get__
    return self.get(obj, cls)
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/traitlets.py", line 535, in get
    value = self._validate(obj, dynamic_default())
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 867, in _default_allow_remote
    for info in socket.getaddrinfo(self.ip, self.port, 0, socket.SOCK_STREAM):
  File "/home/user/anaconda3/lib/python3.6/socket.py", line 745, in getaddrinfo
    for res in _socket.getaddrinfo(host, port, family, type, proto, flags):
socket.gaierror: [Errno -2] Name or service not known
```

这是由于当前用户对notebook_cookie_secret无访问权限，解决办法为: 进入目录/run/user/1000/，将notebook_cookie_secret所在的目录设置所有者为当前用户。命令为：
`chown -R username(当前用户名) ./jupyter`

**（2）报错KeyError: 'allow_remote_access'**

```
Traceback (most recent call last):
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/traitlets.py", line 528, in get
    value = obj._trait_values[self.name]
KeyError: 'allow_remote_access'
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 864, in _default_allow_remote
    addr = ipaddress.ip_address(self.ip)
  File "/home/user/anaconda3/lib/python3.6/ipaddress.py", line 54, in ip_address
    address)
ValueError: '' does not appear to be an IPv4 or IPv6 address
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  File "/home/user/anaconda3/bin/jupyter-notebook", line 11, in <module>
    sys.exit(main())
  File "/home/user/anaconda3/lib/python3.6/site-packages/jupyter_core/application.py", line 266, in launch_instance
    return super(JupyterApp, cls).launch_instance(argv=argv, **kwargs)
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/config/application.py", line 657, in launch_instance
    app.initialize(argv)
  File "</home/user/anaconda3/lib/python3.6/site-packages/decorator.py:decorator-gen-7>", line 2, in initialize
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/config/application.py", line 87, in catch_config_error
    return method(app, *args, **kwargs)
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 1628, in initialize
    self.init_webapp()
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 1378, in init_webapp
    self.jinja_environment_options,
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 159, in __init__
    default_url, settings_overrides, jinja_env_options)
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 252, in init_settings
    allow_remote_access=jupyter_app.allow_remote_access,
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/traitlets.py", line 556, in __get__
    return self.get(obj, cls)
  File "/home/user/anaconda3/lib/python3.6/site-packages/traitlets/traitlets.py", line 535, in get
    value = self._validate(obj, dynamic_default())
  File "/home/user/anaconda3/lib/python3.6/site-packages/notebook/notebookapp.py", line 867, in _default_allow_remote
    for info in socket.getaddrinfo(self.ip, self.port, 0, socket.SOCK_STREAM):
  File "/home/user/anaconda3/lib/python3.6/socket.py", line 745, in getaddrinfo
    for res in _socket.getaddrinfo(host, port, family, type, proto, flags):
socket.gaierror: [Errno -2] Name or service not known
```
这是由于在很多教程中没有设置c.NotebookApp.allow_remote_access = True所致，设置好这项便解决了问题。

#### 4.远程访问
此时应该可以直接从本地浏览器直接访问http://address_of_remote(服务器ip地址):8888就可以看到jupyter的登陆界面。

第一次登陆要求输入账号和密码，账号为服务器端用户名，密码即为刚刚第二步中设置的密码，即可看到目录列表。

#### 5.ssh通道
若第四步输入网址无法进入，提示可能是防火墙问题，此时可以通过ssh访问远程服务器， 在windows下通过xshell等工具访问远程服务器，可在会话中设置，选择属性-ssh-隧道，点击添加

<div align=center>![avatar](/uploads/jupyter.png)


侦听端口填写8000（端口号与设置的有关），目标端口默认是8888

设置完成后，再在服务器输入jupyter notebook，在windows本地输入localhost:8000就可以访问远程服务器上的jupyter了


**将Jupyter代码转成py脚本
jupyter nbconvert --to script 你的脚本名.ipynb**

#### 6.安装R内核
要使用R需要先安装R内核
简单的方法：通过Anaconda安装R内核

````
conda install -c r r-essentials
````
稍微麻烦的方法：手动安装R内核如果你不是用Anaconda，过程会有点复杂，首先，你需要从CRAN安装R。 
之后，启动R控制台，运行下面的语句：
````
install.packages(c('repr', 'IRdisplay', 'crayon', 'pbdZMQ', 'devtools'))
devtools::install_github('IRkernel/IRkernel')
IRkernel::installspec()  # to register the kernel in the current R installation
````








