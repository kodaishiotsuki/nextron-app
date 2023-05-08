import { BrowserView, BrowserWindow, Menu, app, ipcMain } from "electron";
import serve from "electron-serve";
import { createWindow } from "./helpers";

const isProd: boolean = process.env.NODE_ENV === "production";

if (isProd) {
  serve({ directory: "app" });
} else {
  app.setPath("userData", `${app.getPath("userData")} (development)`);
}

(async () => {
  await app.whenReady();

  const mainWindow = createWindow("main");

  // メニューアイテムを追加
  const menu = Menu.buildFromTemplate([
    {
      label: "Developer",
      submenu: [
        {
          label: "Toggle Developer Tools",
          accelerator:
            process.platform === "darwin" ? "Cmd+Alt+I" : "Ctrl+Shift+I",
          click() {
            mainWindow.webContents.toggleDevTools();
          },
        },
      ],
    },
  ]);

  // メニューを設定
  Menu.setApplicationMenu(menu);

  if (isProd) {
    await mainWindow.loadURL("app://./home.html");
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    // mainWindow.webContents.openDevTools();
  }

  // 追加: IPCリスナー
  ipcMain.handle("close-browserview", () => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    if (!mainWindow) {
      return;
    }
    mainWindow.setBrowserView(null);
  });

  // 追加: IPCリスナー
  ipcMain.handle("open-browserview", (_event, url) => {
    const mainWindow = BrowserWindow.getFocusedWindow();
    if (!mainWindow) {
      return;
    }
    const browserView = new BrowserView();
    mainWindow.setBrowserView(browserView);

    const [width, height] = mainWindow.getSize();
    browserView.setBounds({
      x: width / 2,
      y: 0,
      width: width / 2,
      height: height,
    });
    browserView.webContents.loadURL(url);
  });
})();

app.on("window-all-closed", () => {
  app.quit();
});
