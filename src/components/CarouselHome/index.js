import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import styles from './styles.module.scss';

export default function CarouselHome() {
  return (
    <CarouselProvider
      naturalSlideWidth={150}
      naturalSlideHeight={100}
      totalSlides={9}
      visibleSlides={3}
      currentSlide={2}
      interval={3000}
      infinite={true}
      className={styles.carouselCards}
    >
      <Slider>
        <Slide className={styles.cards} index={0}>
          <img src="" alt="" />
          <h3>Módulo Direito Penal</h3>
          <p>300 páginas</p>
          <p>R$39,00</p>
          <a href="https://pag.ae/7WEBxVhew">
            <button type="button">Comprar</button>
          </a>
        </Slide>
        <Slide className={styles.cards} index={1}>
          <img src="" alt="" />
          <h3>Módulo Direito Administrativo</h3>
          <p>300 páginas</p>
          <p>R$39,00</p>
          <button type="button">Comprar</button>
        </Slide>
        <Slide className={styles.cards} index={2}>
          <img src="" alt="" />
          <h3>Módulo Direito Penal Militar</h3>
          <p>300 páginas</p>
          <p>R$39,00</p>
          <button type="button">Comprar</button>
        </Slide>
        <Slide className={styles.cards} index={3}>
          <img src="" alt="" />
          <h3>Curso Completo CFO/21</h3>
          <p>6 apostilas</p>
          <p>300 páginas</p>
          <p>R$239,90</p>
          <button type="button">Comprar</button>
        </Slide>
        <Slide className={styles.cards} index={4}>
          <img src="" alt="" />
          <h3>Módulo Direito Constitucional</h3>
          <p>300 páginas</p>
          <p>R$39,00</p>
          <button type="button">Comprar</button>
        </Slide>
        <Slide className={styles.cards} index={5}>
          <img src="" alt="" />
          <h3>Módulo Direito Humanos</h3>
          <p>300 páginas</p>
          <p>R$39,00</p>
          <button type="button">Comprar</button>
        </Slide>
        <Slide className={styles.cards} index={6}>
          <img src="" alt="" />
          <h3>Módulo Direito Processual Penal</h3>
          <p>300 páginas</p>
          <p>R$39,00</p>
          <button type="button">Comprar</button>
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
