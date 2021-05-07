import { createContext, useState, useContext } from 'react';

const ModalContext = createContext();

export default function ModalProvider({ children }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const modal = setTimeout(() => {
    setIsModalVisible(true);
  }, 6000);

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  return useContext(ModalContext);
};
