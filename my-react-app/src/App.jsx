import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/home";
import About from "./Pages/About";
import "./styles/app.scss";
import Error from "./Pages/Error";
import FicheAppart from "./Pages/FicheAppart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Apropos" element={<About />} />
          <Route path="/:id" element={<FicheAppart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
