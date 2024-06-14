import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Thankyou from "./pages/thankyou";
import WhatsAppButton from "../src/WhatsAppButton";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/products" Component={Shop} />
          <Route path="/contact" Component={Contact} />
          <Route path="/thankyou" Component={Thankyou} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </BrowserRouter>
    </>
  );
}

export default App;
