import { useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Theme from "./components/Theme";
import Events from "./components/Events";
import Rules from "./components/Rules";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Theme />
          <Events />
          <Rules />
          <Schedule />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;