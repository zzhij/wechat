## ws链接
* 每次 小程序刷新 后台代码也要刷新  要不然会报错（链接未打开）
```
wss.on('connection', ws => {
    ws.on('message', function incoming(data) { // 接收客户端数据 接受客户端数据  必须能打开链接 ws.on('open', () => {}),或者现在这样
        console.log(data);
    });
    setInterval( () => {
        ws.send(JSON.stringify(stocks)); // 发送数据给客户端
    }, 1000);
})
```