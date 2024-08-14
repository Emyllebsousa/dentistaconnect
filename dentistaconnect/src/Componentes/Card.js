import styles from '../Styles/Card.module.css';
import Link from 'next/link';

const Card = ({ title, image, link }) => {
  return (
    <div>
    <><div className={styles.card}>
      <Link href={link}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      </Link>
    </div><div className={styles.title}>{title}</div></>
    </div>
  );
};

export default Card;
