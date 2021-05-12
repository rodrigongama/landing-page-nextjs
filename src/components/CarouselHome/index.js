import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Button from '../Button';

import styles from './styles.module.scss';

export default function CarouselHome() {
  return (
    <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={100}
      totalSlides={8}
      visibleSlides={2}
      interval={3000}
      className={styles.carouselCards}
    >
      <Slider>
        <Slide className={styles.cards} index={0}>
          <h3>Apostila Direito Penal</h3>

          <Button title="Comprar" />
        </Slide>
        <Slide className={styles.cards} index={1}>
          <h3>Curso Completo CFO/21</h3>

          <Button title="Comprar" />
        </Slide>
        <Slide className={styles.cards} index={2}>
          <h3>Apostila Penal Militar</h3>

          <Button title="Comprar" />
        </Slide>
        <Slide className={styles.cards} index={3}>
          <h3>Apostila Direitos Humanos</h3>

          <Button title="Comprar" />
        </Slide>
        <Slide className={styles.cards} index={4}>
          <h3>Apostila Direito Administrativo</h3>

          <Button title="Comprar" />
        </Slide>

        <Slide className={styles.cards} index={5}>
          <h3>Apostila Direito Constitucional</h3>

          <Button title="Comprar" />
        </Slide>

        <Slide className={styles.cards} index={6}>
          <h3>Apostila Direito Processual Penal</h3>

          <Button title="Comprar" />
        </Slide>
      </Slider>

      <ButtonBack>
        <img src="/white-arrow-prev.png" alt="Anterior" />
      </ButtonBack>
      <ButtonNext>
        <img src="/white-arrow-next.png" alt="Próximo" />
      </ButtonNext>
    </CarouselProvider>
  );
}
