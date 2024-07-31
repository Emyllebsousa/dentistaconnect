import Header from "@/Header/Header";
import styles from "@/Styles/sobre.module.css";

export default function Sobre() {
    return (
        <div className={styles.corpo}>
            <Header />
            <div className={styles.tela}>
            <h1 className={styles.titulo}>AGENDAMENTO</h1>
            <div className={styles.botoes}>
                <button className={styles.button}>
                    AVALIAÇÃO
                </button>

                <button className={styles.button}>
                    LIMPEZA
                </button>

                <button className={styles.button}>
                    OUTROS
                </button>

                <footer className={styles.footer}></footer>
                </div>
            </div>
        </div>
    )
};
