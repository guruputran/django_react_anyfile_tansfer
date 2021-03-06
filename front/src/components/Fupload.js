/** @format */

import React, { useState } from "react";

function Fupload() {
  const [title, setTitle] = useState("");
  const [cover, setCever] = useState();

  const newBook = () => {
    const uploadData = new FormData();
    uploadData.append("title", title);
    uploadData.append("cover", cover, cover.name);

    fetch("http://localhost:8000/books/", {
      method: "POST",
      body: uploadData,
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h3>Upload images with React</h3>
      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
      </label>
      <br />
      <label>
        Cover
        <input type="file" onChange={(evt) => setCever(evt.target.files[0])} />
      </label>
      <br />
      <button onClick={() => newBook()}>New Book</button>
    </div>
  );
}

export default Fupload;
