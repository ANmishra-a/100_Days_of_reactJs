import React, { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  function titleChangeHandler(event) {
    setTitle(event.target.value);
  }
  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log("Clicked");
    console.log(title, body);
    const post = {
      title: { title },
      body: { body },
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  return (
    <div>
      <h1>Add new post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label for="input">Title :</label>
          <br />
          <input
            type="text"
            id="input"
            name="title"
            value={title}
            onChange={titleChangeHandler}
            placeholder="enter title"
          ></input>
          <br />
        </div>
        <div>
          <label for="info">Body :</label>
          <br />
          <textarea
            id="info"
            onChange={bodyChangeHandler}
            value={body}
            name="body"
            placeholder="Enter here..."
          ></textarea>
        </div>
        <button type="submit">Add new post</button>
      </form>
      <br />
    </div>
  );
}
export default PostForm;
