import React from 'react';
import style from '../Styles/modal.module.css';

export default function Modal(props) {
  const visibilityClass = props.visibility ? style.showModal : style.hideModal;

  const handleClick = () => {
    props.setClicked([]);
    props.setScore(0);
    props.reset();
    window.location.reload();
  };

  return (
    <div className={visibilityClass}>
      <h3>You {props.output}</h3>
      <button onClick={handleClick}>Play Again</button>
    </div>
  );
}
