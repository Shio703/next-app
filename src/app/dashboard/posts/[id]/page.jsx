"use client";

import React, { useEffect, useState } from "react";

function SinglePost({ params }) {
  const [SinglePost, setSinglePost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setSinglePost(res);
        setTitle(res.title);
        setDesc(res.body);
        setUserId(res.userId);
      });
  }, []);

  const handleEdit = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${params.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: SinglePost.id,
          title,
          body: desc,
          userId,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    const data = await res.json();
    setSinglePost(data);
  };

  return (
    <div>
      <h3>{SinglePost.title}</h3>
      <p>{SinglePost.body}</p>
      <br /> <br />
      <p>
        user id: {SinglePost.userId} / post id: {SinglePost.id}
      </p>
      <br />
      <br />
      <input
        type="text"
        placeholder={SinglePost.title}
        style={{ height: "30px", width: "300px", background: "transparent" }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder={SinglePost.body}
        style={{ height: "30px", width: "300px", background: "transparent" }}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br /> <br />
      <input
        type="text"
        placeholder={SinglePost.userId}
        style={{ height: "30px", background: "transparent" }}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br /> <br />
      <button onClick={handleEdit}>edit</button>
    </div>
  );
}

export default SinglePost;
