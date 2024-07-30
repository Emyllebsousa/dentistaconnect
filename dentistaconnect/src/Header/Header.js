"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from '@/Styles/Header.module.css'; // Certifique-se de que o caminho para o arquivo CSS está correto

const Header = () => {
const [menuOpen, setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
};

return (
    <header className={styles.header}>
    <div className={styles.titulo}>
        <h1>DENTISTA</h1>
        <div className={styles.textotitulo}>
        <h1>CONNECT</h1>
        </div>
    </div>
    {/* <nav className={styles.nav}>
        <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="menu"
        >
        ☰
        </button>
        <ul id="menu" className={`${styles.ul} ${menuOpen ? styles.showMenu : ''}`}>
        <li><Link href="/" className={styles.a}>Discografía</Link></li>
        <li><Link href="/perfil" className={styles.a}>Links</Link></li>
        <li><Link href="/sobre" className={styles.a}>Sobre</Link></li>
        </ul>
      </nav> */}

        <image
    </header>
  );
};

export default Header;
