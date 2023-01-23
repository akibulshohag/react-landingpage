import './App.css';
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
  //  Route, 
   Routes 
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar />
       <Routes >
      
       {/* <Route path="/home" element={<Home />} /> */}
      </Routes >
      <Footer />
    </Router>
    </>
  );
}

export default App;
