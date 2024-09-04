import React from 'react';
import styles from '@/styles/card.module.css';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.cardImg}
        src={imageUrl || 'https://via.placeholder.com/150'} // Define uma imagem padrão
        alt={title}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{description}</p>
      <button className={styles.scheduleBtn}>Agendar</button>
    </div>
  );
};

export default Card;
