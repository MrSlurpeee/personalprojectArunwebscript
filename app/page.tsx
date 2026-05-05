"use client";
import { useEffect, useRef } from "react";

const Profile = {
  name: "Arun Graeff",
  title: "Student",
  town: "Ottumwa",
  school: "Indian Hills Community College",
};

export default function Page() {
  const cardRef = useRef(null);

  const handleFocus = () => {
    if (cardRef.current) {
    }
  };
  return (
    <div style={{ fontFamily: "sans-serif", padding: 30 }}>
      <h2 style={{ color: "#F14" }}>Profile</h2>

      <button
        onClick={handleFocus}
        style={{
          marginBottom: 20,
          padding: "8px 12px",
          cursor: "pointer",
        }}
      ></button>

      <div
        ref={cardRef}
        style={{
          padding: 28,
          border: "2px solid #F14",
          borderRadius: 20,
          maxWidth: 300,
          background: "linear-gradient(135deg,#f6d365, #fda085)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <p>
          <b>Name:</b> {Profile.name}
        </p>
        <p>
          <b>Title:</b> {Profile.title}
        </p>
        <p>
          <b>Town:</b> {Profile.town}
        </p>
        <p>
          <b>School:</b> {Profile.school}
        </p>
      </div>
    </div>
  );
}
