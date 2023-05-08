import React from "react";
import { ipcRenderer } from "electron";

interface Props {
  label: string;
  url: string;
}

const OpenButton: React.FC<Props> = ({ label, url }) => {
  const openBrowserView = () => {
    ipcRenderer.invoke("open-browserview", url);
  };

  return (
    <button
      onClick={openBrowserView}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {label}
    </button>
  );
};

export default OpenButton;
