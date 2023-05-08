import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { TodoProvider } from "../context/TodoContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}

export default MyApp;
