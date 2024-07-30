"use client";

import styles from '@/Styles/Card.module.css';

const Card = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
    </div>
  );
};

export default Card;
