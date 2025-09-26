import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="card">
      {props.teamImage && (
        <img 
          src={props.teamImage} 
          alt={`${props.teamName} logo`}
          className="team-logo"
        />
      )}
      <h3>{props.teamName || 'Team Name'}</h3>
      <h5>{props.teamLocation || 'Team Location'}</h5>
    </div>
  );
}

export default Card;