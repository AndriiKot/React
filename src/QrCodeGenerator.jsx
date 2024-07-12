import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./QrCodeGenerator.css";

export const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");

  const handleGenerate = () => {
    setQrCodeValue(inputValue);
    setInputValue("");
  };

  const onChangeGenerate = (event) => {
    setInputValue(event.target.value);
    setQrCodeValue("");
  };

  return (
    <div className="wrapper__generator">
      {qrCodeValue !== "" && <QRCodeSVG value={qrCodeValue} />}
      <input type="text" value={inputValue} onChange={onChangeGenerate} />
      <button type="button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};
