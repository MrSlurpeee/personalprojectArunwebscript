import { useState } from "react";

/**
 this personal project will be a web profile with an included api
*/

export default function ArunPersonalPage() {}
const [name, setName] = useState("Arun Graeff");

return (
  <div style={Styles.container}>
    <h1 style={styles.title}>Arun Graeff</h1>

    <div style={styles.card}></div>
  </div>
);
