import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./QrCodeGenerator.css";

export const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  const handleGenerate = () => {
    setQrCodeValue(inputValue);
    if (inputValue) {
      setIsHidden(true);
    }
    if (!inputValue && qrCodeValue) {
      setIsHidden(false);
    }
    setInputValue("");
  };

  const onChangeGenerate = (event) => {
    setInputValue(event.target.value);
    setQrCodeValue("");
    if (!inputValue) {
      setIsHidden(false);
    }
  };

  return (
    <div className="wrapper__generator">
      <div
        className="test"
        style={{ display: isHidden ? "none" : "block" }}
      ></div>
      {qrCodeValue !== "" && <QRCodeSVG value={qrCodeValue} />}
      <input type="text" value={inputValue} onChange={onChangeGenerate} />
      <button type="button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};
