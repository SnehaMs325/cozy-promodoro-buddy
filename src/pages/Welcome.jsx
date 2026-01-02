import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard.jsx";
import "../styles/welcome.css";

// GIFs import from src/assets
import bunny from "../assets/characters/bunny.gif";
import cat from "../assets/characters/cat.gif";
import panda from "../assets/characters/panda.gif";

const characters = [
  { name: "Bunny", video: bunny, color: "#FFD9C0" },
  { name: "Cat", video: cat, color: "#FFC0CB" },
  { name: "Panda", video: panda, color: "#C0FFD9" },
];

export default function Welcome() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleSelect = (character) => {
    setSelected(character);
    localStorage.setItem("selectedCharacter", JSON.stringify(character));
    setTimeout(() => navigate("/promodoro"), 300);
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to the Pomodoro App</h1>
      <p className="welcome-subtitle">Choose your study buddy 🐾</p>

      <div className="characters-list">
        {characters.map((char) => (
          <CharacterCard
            key={char.name}
            character={char}
            isSelected={selected?.name === char.name}
            onClick={() => handleSelect(char)}
          />
        ))}
      </div>
    </div>
  );
}
