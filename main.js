const { app, BrowserWindow, Menu, nativeTheme } = require('electron')

Menu.setApplicationMenu(null)

nativeTheme.themeSource = 'light'

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true
      
    }
  })

  win.loadURL('https://messages.google.com/web/')
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})