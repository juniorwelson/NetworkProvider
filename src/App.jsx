

{/* importando componentes*/ }
import Navbar from './components/Navbar';
import Home from './components/Home'
import Benefits from './components/Benefits';
import Plans from './components/Plans';
import Testimony from './components/Testimony';
import About from './components/About';
import Footerr from './components/Footerr';
function App() {
  

  return (
    <div className="App ">
      <Navbar />
      <Home />
      <Benefits />
      <Plans />
      <Testimony />
      <About />
      <Footerr/>
     
    </div>
  );
}

export default App
