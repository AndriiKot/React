import React from "react";
import ReactDOM from "react-dom/client";
import { Layout } from "./Layout";
import { QrCodeGenerator } from "./QrCodeGenerator";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <h1>QR Code</h1>
    <Layout />
    <QrCodeGenerator />
  </>
);
