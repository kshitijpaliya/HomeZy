import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Companies from "./Companies/Companies";
import Places from "./Places/Places";
import Values from "./Values/Values";
import "./index.css";
import Contact from "./Contact/Contact";
import GetStarted from "./GetStarted/GetStarted";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        <Companies />
        <Places />
        <Values />
        <Contact />
        <GetStarted />
        <Footer />
    </div>
  );
}

export default App;
