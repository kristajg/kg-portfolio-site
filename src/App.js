import kg from './assets/images/kg.jpg';
import './assets/styles/index.scss';

import Subheader from './components/Subheader';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>hi, I'm<br /><b>Krista Goralczyk 💁‍♀️💻</b></h2>
        <Subheader />
        {/* <img src={kg} className="bio-img" alt="Krista" /> */}
      </header>
      <Footer />
    </div>
  );
}

export default App;
