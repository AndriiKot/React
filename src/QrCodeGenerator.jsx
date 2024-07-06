import { QRCodeSVG } from "qrcode.react";

export const QrCodeGenerator = () => {
  return (
    <div>
      <h3>QR Code Generator</h3>
      <QRCodeSVG value="Testing QR Code 123" />
    </div>
  );
};
