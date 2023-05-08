import { BrowserWindow, BrowserView } from "electron";

export function createBrowserView(mainWindow: BrowserWindow, url: string) {
  const browserView = new BrowserView();
  mainWindow.setBrowserView(browserView);
  browserView.setBounds({ x: 230, y: 27, width: 750, height: 900 });
  browserView.webContents.loadURL(url);
}
