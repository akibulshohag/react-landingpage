import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import Home from './components/home'
import {
  BrowserRouter as Router,
   Route, 
   Routes 
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
       <Routes >
      
       <Route exact path="/" element={<Home />} />
      </Routes >
      <Footer />
    </Router>
    </>
  );
}

export default App;
