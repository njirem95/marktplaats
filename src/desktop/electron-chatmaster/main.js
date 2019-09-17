const { app, BrowserWindow } = require('electron');

function createWindow() {
    let window = new BrowserWindow({
        width: 1200,
        height: 1000,
        webPreferences: {
            nodeIntegration: true   
        }
    });

    window.loadFile('index.html');
    window.webContents.openDevTools();
}

app.on('ready', createWindow);