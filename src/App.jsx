import { useEffect, useState } from "react";

import Preloader from "@components/Preloader";
import Banner from "@components/Banner";
import Header from "@components/Header";
import About from "@components/About";
import Projects from "@components/Projects";
import Testimonials from "@components/Testimonials";
import Partners from "@components/Partners";
import Experince from "@components/Experince";
import Approach from "@components/Approach";
import Contacts from "@components/Contacts";
import Footer from "@components/Footer";

import "@styles/index.scss";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Header />
          <Banner />
          <About />
          <Projects />
          <Testimonials />
          <Partners />
          <Experince />
          <div className="bottom">
            <Approach />
            <Contacts />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default App;
