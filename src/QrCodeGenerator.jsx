import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export const QrCodeGenerator = () => {
  const [inputValue, setInputValue] = useState("");
  const [handleClick, setHandleClick] = useState('');

  const handleGenerate = () => {
    setHandleClick(inputValue);
    setInputValue("");
  };

  const onChangeGenerate = (event) => {
    setInputValue(event.target.value);
    setHandleClick('');
  };


  return (
    <div>
      <h3>QR Code Generator</h3>
      {handleClick !== '' && <QRCodeSVG value={handleClick} />}
      <input type="text" value={inputValue} onChange={onChangeGenerate} />
      <button type="button" onClick={handleGenerate}>
        Generate
      </button>
    </div>
  );
};
