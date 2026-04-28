"use client";
import { useState } from "react";
/**
 this personal project will be a web profile with an included api
*/

export default function ArunPersonalPage() {
  const [name, setName] = useState("Arun Graeff");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Arun Graeff</h1>

      <div style={styles.card}></div>
      <p>Hello this is my personal project</p>

      <input
        style={styles.input}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="place name"
      />
    </div>
  );
}

const styles = {
  container: {
    padding: "23px",
    fontFamily: "Arial",
  },
  title: {
    fontSize: "22px",
    marginBottom: "20px",
  },
  card: {
    padding: "23px",
    border: "1px solid",
    borderRadius: "15px",
    display: "inline-block",
  },
};
