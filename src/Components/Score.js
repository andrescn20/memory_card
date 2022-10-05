import React from 'react';

export default function Score(props) {
  return (
    <div id='scoreContainer'>
      <h3>Score: {props.score}</h3>
    </div>
  );
}
