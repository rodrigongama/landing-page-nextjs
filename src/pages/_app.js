import '../styles/global.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
