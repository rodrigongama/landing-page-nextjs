import Head from 'next/head';
import Button from '../../components/Button';
import Modal from '../../components/Modal/Modal';
import styles from './styles.module.scss';

export default function Material() {
  return (
    <main className={styles.materialContainer}>
      <Head>
        <title>JurisMilitar | Materiais</title>
      </Head>

      <div className={styles.textsContainer}>
        <img src="/capa-penal-geral.png" alt="Apostila de Direito Penal" />
        <div>
          <h2>Apostila Direito Penal</h2>
          <p>Parte geral, Especial e Leis Especiais</p>
          <p>222 páginas</p>
          <p>R$39,90</p>

          <Button title="Comprar" />
        </div>
      </div>
      <div className={styles.textsContainer}>
        <img
          src="/capa-dir-penal-militar.png"
          alt="Apostila de Direito Penal Militar"
        />
        <div>
          <h2>Apostila Direito Penal Militar</h2>
          <p>22 páginas</p>
          <p>R$34,90</p>

          <Button title="Comprar" />
        </div>
      </div>
      <div className={styles.textsContainer}>
        <img src="/capa-dir-humanos.png" alt="Apostila Direitos Humanos" />
        <div>
          <h2>Apostila de Direitos Humanos</h2>
          <p>34 páginas</p>
          <p>R$34,90</p>

          <Button title="Comprar" />
        </div>
      </div>

      <div className={styles.textsContainer}>
        <img
          src="/capa-processo-penal.png"
          alt="Apostila Direito Processual Penal"
        />
        <div>
          <h2>Apostila Direito Process. Penal</h2>
          <p>100 páginas</p>
          <p>R$39,90</p>

          <Button title="Comprar" />
        </div>
      </div>
      <div className={styles.textsContainer}>
        <img src="/capa-dir-const.png" alt="Apostila Direito Constitucional" />
        <div>
          <h2>Apostila Direito Constitucional</h2>
          <p>100 páginas</p>
          <p>R$39,90</p>

          <Button title="Comprar" />
        </div>
      </div>

      <div className={styles.textsContainer}>
        <img src="/capa-dir-adm.png" alt="Apostila de Direito Administrativo" />
        <div>
          <h2>Apostila Direito Administrativo</h2>
          <p>63 páginas</p>
          <p>R$39,90</p>

          <Button title="Comprar" />
        </div>
      </div>

      <Modal />
    </main>
  );
}
