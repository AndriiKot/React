import "./App.css";
import { IMAGES } from "./Cats/images.js";
import CatCard from "./Cats/CatCard.jsx";

function App() {
  return (
    <>
      <div className="cat-container">
        {IMAGES.map((image) => (
          <CatCard
            key={image.id}
            id={image.id}
            src={image.src}
            alt={image.alt}
            title={image.title}
          />
        ))}
      </div>
    </>
  );
}

export default App;
