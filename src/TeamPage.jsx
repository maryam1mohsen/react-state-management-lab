import React from 'react';
import TeamMemberCard from './TeamMemberCard.jsx';

function TeamPage({ team, handleRemoveFighter }) {
  return (
    <div>
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((fighter, index) => (
            <TeamMemberCard
              key={index}
              fighter={fighter}
              handleRemoveFighter={handleRemoveFighter}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TeamPage;
