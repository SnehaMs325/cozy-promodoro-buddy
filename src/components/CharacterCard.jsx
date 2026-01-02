import React from "react";
import "../styles/welcome.css";

export default function CharacterCard({ character, isSelected, onClick }) {
  return (
    <div
      className={`character-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {/* Text left */}
      <div className="character-text">
        <h3>{character.name}</h3>
      </div>

      {/* GIF right */}
      <div className="character-image">
        <img src={character.video} alt={character.name} />
      </div>
    </div>
  );
}
