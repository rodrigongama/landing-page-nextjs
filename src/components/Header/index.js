import styles from './styles.module.scss';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <div className={styles.logo}>
          <img
            src="/logo-bkg-white-2.jpg"
            alt="Logotipo"
            className={styles.logoImage}
          />

          <img src="/jurismilitar.jpg" alt="JurisMilitar" />
        </div>
      </Link>
      <div
        className={!openMenu ? styles.menuIcon : styles.closeIcon}
        onClick={() => (!openMenu ? setOpenMenu(true) : setOpenMenu(false))}
      >
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>

      {openMenu && (
        <div className={styles.sideMenu}>
          <h2>Juris Militar</h2>
          <a href="/about">Quem Somos</a>
          <a href="/news">Novidades</a>
          <a href="/material">Conheça nosso curso</a>
        </div>
      )}

      <div>
        <ul className={styles.menu}>
          <li>
            <Link href="/about">Quem Somos</Link>
          </li>
          <li>
            <Link href="/news">Novidades</Link>
          </li>
          <li>
            <Link href="/material">Conheça nosso curso</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
