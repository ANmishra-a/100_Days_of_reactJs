import React, { useEffect, useState } from "react";

function Post() {
  const [initial, setInitialState] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // fetch returns a promise
      .then((res) => res.json()) // converts the response into JSON object
      .then((data) => setInitialState(data)); // logs the data
  });
  const postItem = initial.map((item) => (
    <div key={item.id}>
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  ));
  return (
    <div>
      <h1>Post</h1>
      <p>{postItem}</p>
    </div>
  );
}

export default Post;
