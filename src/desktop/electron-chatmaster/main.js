const { app, BrowserWindow } = require('electron');

function createWindow() {
    let window = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {
            nodeIntegration: true   
        }
    });

    window.maximize();

    window.loadFile('index.html');
    window.webContents.openDevTools();
}

app.on('ready', createWindow);