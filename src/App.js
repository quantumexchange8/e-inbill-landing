import './App.css';
import Topbar from './Pages/Topbar';
import Footer from './Pages/Footer';
import Home from "./Pages/Home";
import Whyeinbill from "./Pages/Whye_inbill";
import Einvoice from "./Pages/Einvoice";
import Product from "./Pages/Products";
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App" >
        <Topbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whyeinbill" element={<Whyeinbill />} />
          <Route path="/einvoice" element={<Einvoice />} />
          <Route path="/products" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
