import React from "react";
import { ipcRenderer } from "electron";

const CloseButton: React.FC = () => {
  const closeBrowserView = () => {
    ipcRenderer.invoke("close-browserview");
  };

  return (
    <button
      onClick={closeBrowserView}
      className="font-bold py-2 px-4 rounded bg-white"
    >
      Close
    </button>
  );
};

export default CloseButton;
