import { useState } from "react";
import "./index.css";
import Modal from "./components/modal_window.jsx";


function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>
        ✨ Open Modal
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}

export default App;
