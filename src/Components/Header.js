import React from 'react';
import styles from '../Styles/header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <p className={styles.headerText}>Memory Game: BodyBuilding Edition</p>
    </header>
  );
};

export default Header;
