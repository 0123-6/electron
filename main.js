const {app, BrowserWindow} = require('electron/main')
const path = require('node:path')

// ⚠️ 必须在任何 app.on / whenReady 之前
if (require('electron-squirrel-startup')) {
  app.quit()
}

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // __dirname是path.dirname()的简写
      preload: path.join(__dirname, 'preload.js')
    },
    show: false,
    backgroundColor: '#ffffff',
  })
  win.loadURL('https://jiangjiang0123.cn/nuxt')
  win.once('ready-to-show', () => {
    win.show()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})