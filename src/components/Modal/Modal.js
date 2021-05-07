import Button from '../Button';
import { useModal } from '../../contexts/ModalContext';
import styles from './styles.module.scss';

export default function Modal() {
  const { isModalVisible, setIsModalVisible } = useModal();
  return (
    isModalVisible && (
      <div className={styles.modalMessage}>
        <button
          type="button"
          className={styles.buttonModal}
          onClick={() => setIsModalVisible(false)}
        >
          <div className={styles.buttonFirst}></div>
          <div className={styles.buttonSecond}></div>
        </button>
        <h3>Gostou de nossas apostilas?</h3>
        <p>Entre em contato conosco e peça uma amostra!</p>
        <Button title="Pedir" />
      </div>
    )
  );
}
