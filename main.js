const {app, BrowserWindow} = require('electron/main')
const path = require('node:path')

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // __dirname是path.dirname()的简写
      preload: path.join(__dirname, 'preload.js')
    },
  })
  win.loadURL('https://jiangjiang0123.cn/nuxt')
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})