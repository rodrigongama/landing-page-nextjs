import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <h2>JurisMilitar</h2>

      <div>
        <a
          href="https://www.instagram.com/juris.militar/"
          target="_blank "
          rel="noreferrer"
        >
          <div className={styles.icons}>
            <img src="/icon-insta.png" alt="Instagram JurisMilitar" />
            <h3>Instagram</h3>
          </div>
        </a>
        <a href="mailto:juris.militar@gmail.com">
          <div className={styles.icons}>
            <img src="/icon-email.png" alt="Enviar e-mail" />
            <h3>Contate-nos por e-mail</h3>
          </div>
        </a>
        <a
          href="https://sacola.pagseguro.uol.com.br/1df72eaf-2fd7-4703-a30d-c8fe0fd36813"
          target="_blank"
          rel="noreferrer"
        >
          <div className={styles.icons}>
            <img src="/icon-pdf.png" alt="Adquira nosso material" />
            <h3>Adquira nosso material</h3>
          </div>
        </a>
      </div>
    </footer>
  );
}
