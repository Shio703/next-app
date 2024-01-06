"use client";
import React, { useEffect, useState } from "react";

function Crud() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    console.log("title", title);
    console.log("des", desc);
    console.log("user id", userId);
  }, [title, desc, userId]);

  const handleSubmit = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: desc,
        userId: userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="title"
        style={{ height: 50 }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="body or desc"
        style={{ height: 50 }}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="user id"
        style={{ height: 50 }}
        onChange={(e) => setUserId(1)}
      />
      <br /> <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Crud;
