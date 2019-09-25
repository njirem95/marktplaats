const { app, BrowserWindow } = require('electron');

function createWindow() {
    let window = new BrowserWindow({
        width: 400,
        height: 600,
        webPreferences: {
            nodeIntegration: true   
        }
    });

    window.loadFile('index.html');
    //window.webContents.openDevTools();
}

app.on('ready', createWindow);