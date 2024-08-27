import React from 'react';
import CharacterCard from './CharacterCard.jsx';

function CharactersPage({ zombieFighters, handleAddFighter, money }) {
  return (
    <div>
      <h2>Available Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <CharacterCard
            key={index}
            fighter={fighter}
            handleAddFighter={handleAddFighter}
            money={money}
          />
        ))}
      </ul>
    </div>
  );
}

export default CharactersPage;
