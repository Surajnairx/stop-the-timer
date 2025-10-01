import { useState, useRef } from "react";
export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const getPlayerInput = useRef();
  function handleClick() {
    setPlayerName(getPlayerInput.current.value);
    getPlayerInput.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "unknown entity"} </h2>
      <p>
        <input ref={getPlayerInput} type="text" />
        <button onClick={handleClick}>Enter Name</button>
      </p>
    </section>
  );
}
