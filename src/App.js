import './App.css';
import Topbar from './Pages/Topbar';
import Footer from './Pages/Footer';
import Home from "./Pages/Home";
import Whyeinbill from "./Pages/Whyeinbill";
import Einvoice from "./Pages/Einvoice";
import Product from "./Pages/Products";
import ScrollToTop from './Components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "./Components/ui/provider"

function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
