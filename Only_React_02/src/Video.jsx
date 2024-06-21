function Video(props) {
  const { title, channelName, img } = props;
  return (
    <>
      <div className="video">
        <img className="video-image" src={img} alt="Video image" />
        <p>{title}</p>
        <p>{channelName}</p>
        <div className="video-footer">
          <p>Linkes: 0</p>
          <button>like</button>
        </div>
      </div>
    </>
  );
}

export default Video;
