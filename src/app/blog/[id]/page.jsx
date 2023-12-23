"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = ({ params }) => {
  const [blogItem, setBlogItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [imgCounter, setImgCounter] = useState(0);

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products/${params.id}`)
      .then((response) => response.json())
      .then((result) => {
        setBlogItem(result);
        setLoading(false);
      });
  }, []);

  const handleNextImg = () => {
    if (imgCounter == 2) {
      return;
    } else {
      setImgCounter(imgCounter + 1);
    }
  };

  const handlePrevImg = () => {
    if (imgCounter == 0) {
      return;
    } else {
      setImgCounter(imgCounter - 1);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <div className={styles.loading}>Loading...</div>}
      {blogItem && (
        <div>
          <div className={styles.top}>
            <div className={styles.info}>
              <h1 className={styles.title}>{blogItem.title}</h1>
              <p className={styles.desc}>{blogItem.description}</p>
              <div className={styles.author}>
                <Image
                  src={blogItem.category.image}
                  alt="img"
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.username}>
                  {blogItem.category.name}
                </span>
              </div>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={blogItem.images[imgCounter]}
                alt="image"
                fill={true}
                className={styles.image}
              />

              <button
                onClick={handleNextImg}
                className={`${styles.imgButton} ${styles.prevButton}`}
              >
                &lt; prev
              </button>
              <button
                onClick={handlePrevImg}
                className={`${styles.imgButton} ${styles.nextButton}`}
              >
                next &gt;
              </button>
            </div>
          </div>
          <div className={styles.content}>
            <p className={styles.text}>${blogItem.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
