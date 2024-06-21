import "./App.css";
import reactLogo from "./assets/react.svg";
import Video from "./Video";

function App() {
  return (
    <>
      <div className="video-container">
        <Video title="Video 2" channelName="React JS" img={reactLogo} />
      </div>
    </>
  );
}

export default App;
