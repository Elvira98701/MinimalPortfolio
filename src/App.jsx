import Banner from "@components/Banner";
import Header from "@components/Header";
import About from "@components/About";
import Projects from "@components/Projects";
import "@styles/index.scss";
import Testimonials from "@components/Testimonials";
import Scroll from "@components/Scroll";
import Partners from "@components/Partners";
import Experince from "@components/Experince";
import Approach from "@components/Approach";
import Contacts from "@components/Contacts";
import Footer from "@components/Footer";

const App = () => {
  return (
    <div className="App">
      <Scroll />
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
    </div>
  );
};

export default App;
