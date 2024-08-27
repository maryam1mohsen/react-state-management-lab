import React from 'react';

function CharacterCard({ fighter, handleAddFighter, money }) {
  return (
    <li>
      <img src={fighter.img} alt={fighter.name} />
      <h3>{fighter.name}</h3>
      <p>Price: ${fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => handleAddFighter(fighter)} disabled={money < fighter.price}>
        Add to Team
      </button>
    </li>
  );
}

export default CharacterCard;
