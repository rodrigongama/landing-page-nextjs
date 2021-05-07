import Head from 'next/head';
import CarouselHome from '../components/CarouselHome';
import Modal from '../components/Modal/Modal';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>JurisMilitar | Home</title>
      </Head>
      <section className={styles.principalPhoto}>
        <div className={styles.overlay}>
          <CarouselHome />
        </div>
      </section>

      <section className={styles.photosTitles}>
        <div>
          <img src="/force-home.jpg" alt="Corporação da Polícia Militar" />
          <h3>
            Material feito por atuais cadetes para futuros companheiros de
            farda.
          </h3>
        </div>

        <div>
          <h3>Estude com quem já está lá dentro!</h3>
          <img src="/oficial-home.jpg" alt="Pessoas estudando" />
        </div>
      </section>

      <main className={styles.mainContainer}>
        <h2>Conheça nossas apostilas</h2>

        <section className={styles.gridMaterial}>
          <div>
            <h3>Curso Completo CFO</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi et sint totam ducimus ipsum maiores iste illum cumque,
              error laudantium, rem amet. Minus deleniti sit hic eveniet,
              asperiores soluta.
            </p>
          </div>
          <div>
            <h3>Apostila Direito Penal</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi et sint totam ducimus ipsum maiores iste illum cumque,
              error laudantium, rem amet. Minus deleniti sit hic eveniet,
              asperiores soluta.
            </p>
          </div>
          <div>
            <h3>Apostila Direito Penal Militar</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi et sint totam ducimus ipsum maiores iste illum cumque,
              error laudantium, rem amet. Minus deleniti sit hic eveniet,
              asperiores soluta.
            </p>
          </div>
          <div>
            <h3>Apostila Direito Constitucional</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi et sint totam ducimus ipsum maiores iste illum cumque,
              error laudantium, rem amet. Minus deleniti sit hic eveniet,
              asperiores soluta.
            </p>
          </div>
          <div>
            <h3>Apostila Direito Administrativo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi et sint totam ducimus ipsum maiores iste illum cumque,
              error laudantium, rem amet. Minus deleniti sit hic eveniet,
              asperiores soluta.
            </p>
          </div>
          <div>
            <h3>Apostila Direito Humanos</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              eligendi et sint totam ducimus ipsum maiores iste illum cumque,
              error laudantium, rem amet. Minus deleniti sit hic eveniet,
              asperiores soluta.
            </p>
          </div>
        </section>

        <Modal />
      </main>
    </>
  );
}
