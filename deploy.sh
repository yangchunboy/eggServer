#!/bin/bash

bundleName="eggApi"
folderName="egg-example"
user="root"
ip="47.96.145.88"
remoteFolder="/data"

echo "开始构建，安装npm包"

# npm install --production

echo "安装npm包成功..."

echo "开始打包"

#tar jcvf $bundleName.tar.bz2 ../$folderName

echo "打包成功"

echo "开始将包推送到服务器"
scp $bundleName.tar.bz2 $user@$ip:remoteFolder
#scp eggApi.tar.bz2 root@47.96.145.88:/data

echo "包推送成功"





