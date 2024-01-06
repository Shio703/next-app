import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

function Contact() {
  return (
    <div>
      <h1 className={styles.title}>{"Let's Keep in Touch"}</h1>
      <div className={styles.mainWrapper}>
        <div className={styles.imgContainer}>
          <Image
            src={"/contact.png"}
            alt="contact image"
            className={styles.image}
            fill={true}
          ></Image>
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            cols="30"
            rows="10"
            className={styles.textArea}
          ></textarea>
          <Button title={"Send"} url={"/"} />
        </form>
      </div>
    </div>
  );
}

export default Contact;
