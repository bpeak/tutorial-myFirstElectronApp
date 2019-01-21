console.log("main !! ")

const { app, BrowserWindow, ipcMain } = require('electron')

app.on("ready", () => {
    const win = new BrowserWindow({ width : 800, height : 400 })
    win.loadFile("index.html")
})

ipcMain.on("handleClick", (event, arg) => {
    console.log("clicked!!!")
})