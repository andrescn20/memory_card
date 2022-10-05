import React, { useState, useEffect } from 'react';
import Card from './Components/Card';
import data from './data';
import style from './Styles/App.module.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import _ from 'lodash';
import Score from './Components/Score';
import Modal from './Components/Modal';

const App = () => {
  const [bodyBuilders, setBodyBuilders] = useState('');
  const [reArrange, setReArrange] = useState(false);
  const [score, setScore] = useState(0);
  const [winner, setWinner] = useState(false);
  const [clicked, setClicked] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  useEffect(() => {
    setBodyBuilders(
      _.sampleSize(data, data.length).map((item) => {
        return (
          <Card
            key={item.name}
            {...item}
            handleClickExternal={handleCardClick}
            reArrange={reArrange}
          />
        );
      })
    );
  }, [reArrange]);

  useEffect(() => {
    checkWinCondition();
  }, [score]);

  const handleCardClick = (reArrange, name) => {
    setReArrange(reArrange);
    if (clicked.includes(name)) {
      setModalVisibility(true);
    } else {
      setClicked([...clicked, name]);
      setScore(score + 1);
    }
  };

  const checkWinCondition = () => {
    if (score === data.length) {
      setWinner(true);
      setModalVisibility(true);
    }
  };

  const resetGame = () => {
    setModalVisibility(false);
    console.log(clicked);
    console.log(score);
  };

  return (
    <div className={style.mainContainer}>
      <Header />
      <Score score={score} />
      <div className={style.cardContainer}>{bodyBuilders} </div>
      <Modal
        output={winner ? 'won' : 'lost'}
        visibility={modalVisibility}
        reset={resetGame}
        setClicked={setClicked}
        // score={score}
        setScore={setScore}
        // modalVisibility={modalVisibility}
      />
      <Footer />
    </div>
  );
};

export default App;
