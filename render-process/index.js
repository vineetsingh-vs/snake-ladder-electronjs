const { BrowserWindow } = require('@electron/remote')

const path = require("path");
const url = require("url");

const newWindowBtn = document.getElementById('newWindowBt');

newWindowBtn.addEventListener('click', function(){
    debugger;
    let win= new BrowserWindow({
        title: 'test 2',
        width:200,
        height: 300,
        // webPreferences: {
        //     nodeIntegration: true,
        //     contextIsolation: false,
        //     enableRemoteModule: true,
        
        // }
    });
    win.webContents.openDevTools();
    // win.loadFile(path.join(path.join(__dirname, 'index.html')));
    win.loadFile('./home.html');
});