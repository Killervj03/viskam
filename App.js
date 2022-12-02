
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/Navbar Components';

import Home from './Components/Home';
import OurServices from './Components/ourservices';
import Ourteam from './Components/ourteam';
import Trainingconsulting from './Components/Training-consulting';
import Aboutus from './Components/About us';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";




function App() {

  return (
    <div className="App">
     
      <NavbarComp />
      <Home/>
     < OurServices />
      <Ourteam/>
      <Trainingconsulting />
      <Aboutus/>
      
        </div>
  );
}

export default App;
