import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LandingPage from './screens/landingPage/LandingPage';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <LandingPage></LandingPage>
      </main>
      <Footer />
    </>
  );
}

export default App;
