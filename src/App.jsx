import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    return fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json()
    );
  };

  useEffect(() => {
    fetchPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
