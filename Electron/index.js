const { app, BrowserWindow } = require('electron');

let ventanaMain;
app.on('ready', createWin);


function createWin(params) {
    ventanaMain = new BrowserWindow({
        width: 500,
        height: 500,
    });

    ventanaMain.loadFile('index.html')
}