const { BrowserWindow } = require('@electron/remote')

const newWindowBtn = document.getElementById('newWindowBt');

newWindowBtn.addEventListener('click', function(){
    debugger;
    let win= new BrowserWindow({
        title: 'test 2',
        width:200,
        height: 300,
    });
    // win.webContents.openDevTools();
    win.loadFile('./render-process/home.html');
});