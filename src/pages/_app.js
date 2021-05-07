import '../styles/global.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

import ModalProvider from '../contexts/ModalContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ModalProvider>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Footer />
      </ModalProvider>
    </>
  );
}

export default MyApp;
