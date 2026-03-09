import React from "react";
import "./StoryCard.css";
import html2canvas from "html2canvas";

export default function StoryCard({ username }) {
  const link = `${window.location.origin}/${username}`;

  const downloadCard = () => {
    const card = document.getElementById("story-card");
    html2canvas(card).then((canvas) => {
      const link = document.createElement("a");
      link.download = `${username}-story.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="story-card-wrapper">
      <div className="story-card" id="story-card">
        <h2>Send me anonymous messages 💌</h2>
        <p className="username">@{username}</p>
        <p className="link">{link}</p>
      </div>

      <button className="download-btn" onClick={downloadCard}>
        Download
      </button>
    </div>
  );
}