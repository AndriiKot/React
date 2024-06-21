import { useState } from "react";
import "./Video.css";

function Video(props) {
  const { title, channelName, img } = props;
  const [likes, setLikes] = useState(0);

  function increaseByOneLike() {
    setLikes((like) => like + 1);
  }

  return (
    <>
      <div className="video">
        <img className="video-image" src={img} alt="Video image" />
        <p>{title}</p>
        <p>{channelName}</p>
        <div className="video-footer">
          <p>Linkes: {likes}</p>
          <button onClick={increaseByOneLike}>like</button>
        </div>
      </div>
    </>
  );
}

export default Video;
