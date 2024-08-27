import React from 'react';

function TeamMemberCard({ fighter, handleRemoveFighter }) {
  return (
    <li>
      <img src={fighter.img} alt={fighter.name} />
      <h3>{fighter.name}</h3>
      <p>Price: ${fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => handleRemoveFighter(fighter)}>
        Remove from Team
      </button>
    </li>
  );
}

export default TeamMemberCard;
