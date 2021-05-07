import Head from 'next/head';
import styles from './styles.module.scss';
import Modal from '../../components/Modal/Modal';

export default function About() {
  return (
    <>
      <Head>
        <title>JurisMilitar | Sobre</title>
      </Head>
      <section className={styles.about}>
        <img src="/oficial-about.jpg" alt="Oficial da Polícia Militar" />
        <div className={styles.textsAbout}>
          <div>
            <h2>Missão</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              amet rerum labore quidem voluptate repellendus fugiat laborum
              temporibus quaerat ipsa! Cupiditate omnis nulla illum voluptate,
              dolore nihil tempore similique in.
            </p>
          </div>
          <div>
            <h2>Visão</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              amet rerum labore quidem voluptate repellendus fugiat laborum
              temporibus quaerat ipsa! Cupiditate omnis nulla illum voluptate,
              dolore nihil tempore similique in.
            </p>
          </div>
          <div>
            <h2>Valores</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              amet rerum labore quidem voluptate repellendus fugiat laborum
              temporibus quaerat ipsa! Cupiditate omnis nulla illum voluptate,
              dolore nihil tempore similique in.
            </p>
          </div>
        </div>
      </section>

      <Modal />
    </>
  );
}
