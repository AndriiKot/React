import { QRCodeSVG } from "qrcode.react";

export const QrCodeGenerator = () => {
  const ChangeValueTesting = "Testing Chage Value ";
  const handleGenerate = (event) => {
    console.log("Generate button clicked", event);
  };
  const onChangeGenerate = (event) => {
    console.log("On Change button clicked", event);
  };
  return (
    <div>
      <h3>QR Code Generator</h3>
      <QRCodeSVG value="Testing QR Code 123" />
      <input
        type="text"
        value={ChangeValueTesting}
        onChange={onChangeGenerate}
      />
      <button type="button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};
