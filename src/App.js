import './App.css';
import InitialPage from './scrollPages/InitialPage';
import SecondPage from './scrollPages/SecondPage';
import ThirdPage from './scrollPages/ThirdPage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <div id="divNavbar">
        <Navbar/>
      </div>
      <div>
        <InitialPage/>
      </div>
      <div>
        <SecondPage/>
      </div>
      <div>
        <ThirdPage/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
