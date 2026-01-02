import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/promodoro.css";

export default function Promodoro() {
  const navigate = useNavigate();
  const [time, setTime] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [character, setCharacter] = useState(null); // selected character

  const timerRef = useRef(null);

  useEffect(() => {
    const savedChar = JSON.parse(localStorage.getItem("selectedCharacter"));
    setCharacter(savedChar);
  }, []);

  useEffect(() => {
    if (isRunning && time > 0) {
      timerRef.current = setInterval(() => setTime(prev => prev - 1), 1000);
    }

    if (time === 0) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      setCompleted(true);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning, time]);

  const formatTime = () => {
    const hrs = Math.floor(time / 3600);
    const mins = Math.floor((time % 3600) / 60);
    const secs = time % 60;
    return `${String(hrs).padStart(2,"0")}:${String(mins).padStart(2,"0")}:${String(secs).padStart(2,"0")}`;
  };

  const increaseTime = () => { if (time < 5*60*60) setTime(time + 60); };
  const decreaseTime = () => { if (time > 60) setTime(time - 60); };

  return (
    <div className="promodoro-bg">
      <div className="card-scene">
        <div className={`flip-card ${completed ? "flipped" : ""}`}>
          {/* FRONT */}
          <div className="card-face card-front">
            {character && (
              <img src={character.video} alt={character.name} className="character-gif" />
            )}

            <div className="timer-row">
              <button className="adjust-btn" onClick={decreaseTime}>−</button>
              <div className="timer-text">{formatTime()}</div>
              <button className="adjust-btn" onClick={increaseTime}>+</button>
            </div>

            <div className="action-buttons">
              <button className="timer-btn start" onClick={() => setIsRunning(true)}>Start</button>
              <button className="timer-btn stop" onClick={() => setIsRunning(false)}>Stop</button>
            </div>
          </div>

          {/* BACK */}
          <div className="card-face card-back">
            <h2>Session Completed 🎉</h2>
            <p>Well done! You stayed focused.</p>
            <button className="timer-btn start-again" onClick={() => navigate("/")}>Start Again</button>
          </div>
        </div>
      </div>
    </div>
  );
}
