import styles from './styles.module.scss';
import Dropdown from '../Dropdown';
import Link from 'next/link';

export default function Header() {
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

      <div className={styles.buttonsNavigation}>
        <Link href="/about">
          <button>Quem Somos</button>
        </Link>

        <Link href="/news">
          <button>Notícias</button>
        </Link>

        <Dropdown
          className={styles.dropdown}
          title="Adquira nosso curso"
          items={[
            {
              title: 'Curso Completo CFO/21',
              to: '/material',
            },
            {
              title: 'Direito Constitucional',
              to: '/material',
            },
            {
              title: 'Direito Administrativo',
              to: '/material',
            },
            {
              title: 'Direito Penal',
              to: '/material',
            },
            {
              title: 'Direito Penal Militar',
              to: '/material',
            },
            {
              title: 'Direitos Humanos',
              to: '/material',
            },
          ]}
        />
      </div>
    </header>
  );
}
