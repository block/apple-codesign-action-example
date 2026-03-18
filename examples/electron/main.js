const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({ width: 400, height: 300 });
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
