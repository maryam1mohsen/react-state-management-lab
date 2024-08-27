import React, { useState } from 'react';
import TeamPage from './TeamPage.jsx';
import CharactersPage from './CharactersPage.jsx';

function App() {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' },
  ];

  const handleAddFighter = (character) => {
    if (money >= character.price) {
      setTeam([...team, character]);
      setMoney(money - character.price);
      setTotalStrength(totalStrength + character.strength);
      setTotalAgility(totalAgility + character.agility);
    } else {
      console.log('Not enough money');
    }
  };

  const handleRemoveFighter = (character) => {
    setTeam(team.filter((c) => c.name !== character.name));
    setMoney(money + character.price);
    setTotalStrength(totalStrength - character.strength);
    setTotalAgility(totalAgility - character.agility);
  };

  return (
    <div className="App">
      <h1>Reactville: Zombie Apocalypse</h1>
      <h2>Money: ${money}</h2>
      <h3>Total Team Strength: {totalStrength}</h3>
      <h3>Total Team Agility: {totalAgility}</h3>
      
      <CharactersPage
        zombieFighters={zombieFighters}
        handleAddFighter={handleAddFighter}
        money={money}
      />

      <TeamPage
        team={team}
        handleRemoveFighter={handleRemoveFighter}
      />
    </div>
  );
}

export default App;
