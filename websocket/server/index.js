const WebSocket = require('ws')
const wss = new WebSocket.Server({port: 8080})

/* wss.on('connection', ws => {
    ws.send('something');
}) */

let stocks = { tencent: 100, JD: 50};
function randomInterval (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomStockUpdater () {
    for (let stock in stocks) {
        let randomValue = randomInterval(-50, 50) / 100;
        stocks[stock] = (new Number(stocks[stock]) + randomValue).toFixed(2)
    }
    setTimeout( () => {
        randomStockUpdater()
    }, 1000)
}
randomStockUpdater()
wss.on('connection', ws => {
    ws.on('message', function incoming(data) { // 接收客户端数据
        console.log(data);
    });
    setInterval( () => {
        ws.send(JSON.stringify(stocks)); // 发送数据给客户端
    }, 1000);
})
