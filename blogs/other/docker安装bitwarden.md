---
title: docker安装bitwarden
date: 2022-05-05 20:58:28
tags:
- docker
---

## 1.准备
安装好docker，配置好域名绑定需要加入SSL证书

## 2.部署Bitwarden
```shell
sudo docker run -d --name bitwarden \
 --restart unless-stopped \
 -e WEBSOCKET_ENABLED=true \
 -v /home/ubuntu/bitwarden/:/data/ \
 -p 8087:80 \
 -p 3012:3012 \
 vaultwarden/server:latest
```

## 3.配置反向代理
```nginx
location /bit/ {
    proxy_pass http://127.0.0.1:8087/;
    proxy_http_version    1.1;
    proxy_cache_bypass    $http_upgrade;
    proxy_set_header Upgrade            $http_upgrade;
    proxy_set_header Connection         "upgrade";
    proxy_set_header Host               $host;
    proxy_set_header X-Real-IP          $remote_addr;
    proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto  $scheme;
    proxy_set_header X-Forwarded-Host   $host;
    proxy_set_header X-Forwarded-Port   $server_port;
}
location /notifications/hub {
        proxy_pass http://127.0.0.1:3012;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
}

location /notifications/hub/negotiate {
        proxy_pass http://127.0.0.1:8087;
}
```

## 4.关闭新用户注册
```shell
sudo docker run -d --name bitwarden \
  --restart unless-stopped \
  -e SIGNUPS_ALLOWED=false \
  -e WEBSOCKET_ENABLED=true \
  -v /home/ubuntu/bitwarden/:/data/ \
  -p 8087:80 \
  -p 3012:3012 \
  vaultwarden/server:latest

```



