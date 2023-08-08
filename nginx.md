

```
server{
    listen 8000;
    server_name localhost;

    location / {
        root D:/Users/chinalife/Documents/workspace/AdminLTE-3.2.0;
        index index.html index2.html index3.html; 
    }

    location /admin {
        # 实际访问目录是D:/Users/chinalife/Documents/workspace/AdminLTE-3.2.0/admin  但是这个目录不存在
        root D:/Users/chinalife/Documents/workspace/AdminLTE-3.2.0;
        index index.html index2.html index3.html; 
    }
}
```