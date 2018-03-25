const {
  app,
  BrowserWindow,
  webFrame
} = require('electron');

if (process.argv[2] && process.argv[2] === 'dev') {
  require('electron-reload')(__dirname);
}

let win

app.on('ready', _ => {
  win = new BrowserWindow({
    icon: `${__dirname}/icon.ico`,
    backgroundColor: '#0c0c0c',
    autoHideMenuBar: true,
    resizable: false,
    frame: false,
    height: 600,
    width: 960
  })

  win.loadURL(`file://${__dirname}/src/index.html`);

  win.on('closed', _ => {
    win = null
  })
})

app.on('window-all-closed', _ => {
  process.platform !== 'darwin' && app.quit();
})

app.on('activate', _ => {
  win === null && createWindow();
})
