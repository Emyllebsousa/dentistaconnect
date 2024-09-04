import styles from "@/styles/cardp.module.css";

function CardP({ title, duration }) {
    return (
        <div className={styles.cardP}>
            <div className={styles.CardPinfo}>
                <h3 className={styles.cardPtitle}>{title}</h3>
                <p className="CardPduration">{duration}</p>
            </div>
            <button className={styles.buttonP}>
                Agendar
            </button>
        </div>
    );
}

export default CardP;
