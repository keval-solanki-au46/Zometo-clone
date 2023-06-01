import Header from './Components/Header/Header.jsx'
import Card from './Components/Card/card.jsx'
import './app.scss'
import Colletion from './Components/Collection/colletion.jsx';
import Cities from './Components/Cities/Cities.jsx';
import CTA from './Components/CTA/CTA.jsx'
import Accordian from './Components/AccordianContainer/AccordianContainer.jsx';
import Footer from './Components/Footer/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Header />
      <Card />
      <Colletion />
      <Cities />
      <CTA />
      <Accordian />
      <Footer />
    </div>
  );
}

export default App;
