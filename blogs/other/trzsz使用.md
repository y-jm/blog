---
title: trzsz使用
date: 2023-05-10
tags: linux
---

trzsz是一款文件传输工具
## 1.安装trzsz
### 1.1.Ubuntu 用 apt 安装：
```bash
sudo apt update && sudo apt install software-properties-common
sudo add-apt-repository ppa:trzsz/ppa && sudo apt update
sudo apt install trzsz
```
### 1.2.安装trzsz
```bash
sudo apt install curl gpg
curl -s 'https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x7074ce75da7cc691c1ae1a7c7e51d1ad956055ca' \
    | gpg --dearmor -o /usr/share/keyrings/trzsz.gpg
echo 'deb [signed-by=/usr/share/keyrings/trzsz.gpg] https://ppa.launchpadcontent.net/trzsz/ppa/ubuntu jammy main' \
    | sudo tee /etc/apt/sources.list.d/trzsz.list
sudo apt update
sudo apt install trzsz
```
### 1.3.Linux 用 yum 安装：
```bash
echo '[trzsz]
name=Trzsz Repo
baseurl=https://yum.fury.io/trzsz/
enabled=1
gpgcheck=0' | sudo tee /etc/yum.repos.d/trzsz.repo

sudo yum install trzsz
```
### 1.3.Mac 用 homebrew 安装：
```bash
brew update
brew install trzsz-go
```
## 2.使用
### 2.1.trz文件上传
trz 将文件上传到远程服务器的用法：
```
trz [-h] [-v] [-q] [-y] [-b] [-e] [-d] [-B N] [-t N] [path]
```
- -h：帮助信息并退出
- -v：显示版本并退出
- -q：传输文件时，隐藏进度条
- -y：如存在相同的文件名，则直接覆盖现有文件
- -b：二进制传输模式，对于压缩包、图片、影音传输会较快
- -e：转义所有已知的控制字符
- -d：上传、下载指定的文件或文件夹
- -b：设置最大缓冲区上限，会自动根据网速选择合适的缓冲区大小，但不会超过此上限。（默认值：10M）
- -t：设置超时秒数（默认值：20秒）在超时时间内，如无法传完一个缓冲区大小的数据，则会报错并退出。设置为 0 或负数时，则永不超时。
- path：保存文件的路径。(默认为：当前目录)
### 2.2.tsz文件下载
tsz 可以下载一个或多个文件，可使用相对路径或绝对路径，也可使用通配符，下载指定文件。
```
tsz file1 file2 file3
```