import { useState } from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setplayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing(editing => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setplayerName(event.target.value);
  }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {!isEditing && <span className="player-name">{playerName}</span>}
            {isEditing && <input type="text" required value={playerName} onChange={handleChange}/>}              
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
              {isEditing ? 'Save' : 'Edit'}
            </button>
        </li>
    )
}