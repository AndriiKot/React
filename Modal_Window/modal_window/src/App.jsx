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
      <Modal open={open} setOpen={setOpen}> 
        <h3>Modal Window</h3>
        <img src="../imegs/Luibchick_PNG.png" alt="Cat Luibchick" />
      </Modal>
    </div>
  );
}

export default App;
