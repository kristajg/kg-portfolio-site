import './assets/styles/index.scss';

import Subheader from './components/Subheader';
import Footer from './components/Footer';
import Content from './containers/Content';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>hi, I'm<br /><b>Krista Goralczyk 🌱 💻</b></h2>
        <Subheader />
      </header>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
