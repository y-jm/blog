---
title: docker学习总结
date: 2024-01-31
categories:
 - linux
tags:
 - docker
---
```bash
docker run -d \
--name memos \
-p 5230:5230 \
-v /home/docker/memos/:/var/opt/memos \
neosmemo/memos
```