import { QRCodeSVG } from "qrcode.react";

export const QrCodeGenerator = () => {
    const handleGenerate = () => {
      console.log("Generate button clicked");
    };
    const onChangeGenerate = () => {
      console.log("On Change button clicked");
    };
  return (
    <div>
      <h3>QR Code Generator</h3>
      <QRCodeSVG value="Testing QR Code 123" />
      <input type="text" onChange={onChangeGenerate}/>
      <button type="button" onClick={handleGenerate}>Generate</button>
    </div>
  );
};
