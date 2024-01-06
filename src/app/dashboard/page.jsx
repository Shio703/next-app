"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [url]);

  return (
    <div>
      <button
        onClick={() => {
          setUrl("https://jsonplaceholder.typicode.com/posts");
        }}
      >
        პირველი
      </button>
      <button
        onClick={() => {
          setUrl("https://api.escuelajs.co/api/v1/products");
        }}
      >
        მეორე
      </button> <br />
      <Link href="/dashboard/crud">CRUD</Link> 
      <Link href="/dashboard/posts">Posts</Link>
    </div>
  );
}

export default Dashboard;
