import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");

  const handleGenerate = () => {};

  const onChangeGenerate = (event) => {
    setInputValue(event.target.value);
  };

  console.log(inputValue);
  
  return (
    <div>
      <h3>QR Code Generator</h3>
      <QRCodeSVG value={inputValue} />
      <input type="text" value={inputValue} onChange={onChangeGenerate} />
      <button type="button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};
