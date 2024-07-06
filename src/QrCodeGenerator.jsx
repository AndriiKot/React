import { QRCodeSVG } from "qrcode.react";

export const QrCodeGenerator = () => {
    const handleGenerate = () => {
      console.log("Generate button clicked");
    };
  return (
    <div>
      <h3>QR Code Generator</h3>
      <QRCodeSVG value="Testing QR Code 123" />
      <input type="text" />
      <button type="button" onClick={handleGenerate}>Generate</button>
    </div>
  );
};
