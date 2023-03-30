console.log('main process working');

const {BrowserWindow, app} = require('electron');
const path = require("path");
require('@electron/remote/main').initialize()

let win;
const isDev = process.env.ENV_NODE !== 'production';
const isMac = process.platform !== 'darwin';

const createWindow = ()=>{
    win= new BrowserWindow({
        title: 'test 1',
        width: isDev ? 1000: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
            preload: path.join(__dirname, './main-process/preload.js')
        }
    });
    if(isDev) {
        // win.webContents.openDevTools();
    }
    win.loadFile('./render-process/index.html');
    

    win.on('closed', () =>{
        win = null;
    });
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () =>{
        if(win === null) {
           createWindow();
    }});
});

app.on('window-all-closed', () =>{
    if(isMac) {
        app.quit();
    }

});

app.on('browser-window-created', (_, window) => {
    require("@electron/remote/main").enable(window.webContents)
})