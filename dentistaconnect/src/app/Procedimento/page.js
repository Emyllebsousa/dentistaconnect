import Header from "@/Header/Header";
import styles from "@/Styles/procedimento.module.css";
import Link from "next/link";

export default function Sobre() {
    return (
        <div className={styles.corpo}>
            <Header />
            <div className={styles.tela}>
                <form action="/search" method="GET" className={styles["search-bar"]}>
                    <button type="submit">
                        <img src="/lupa.png" alt="Buscar" />
                    </button>
                    <input type="search" name="query" placeholder="Pesquisar..." aria-label="Pesquisar" required />
                </form>

                <div className={styles.botoes}>
                    <div className={styles.topico}>
                        <h2>PROCEDIMENTO</h2>
                        <Link href="/" className={styles.button}>
                            AGENDAR
                        </Link>
                    </div>

                    <div className={styles.topico}>
                        <h2>PROCEDIMENTO</h2>
                        <Link href="/" className={styles.button}>
                            AGENDAR
                        </Link>
                    </div>

                    <div className={styles.topico}>
                        <h2>PROCEDIMENTO</h2>
                        <Link href="/" className={styles.button}>
                            AGENDAR
                        </Link>
                    </div>

                    <footer className={styles.footer}></footer>
                </div>
            </div>
        </div>
    );
}
