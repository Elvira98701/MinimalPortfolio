import About from "@components/About";
import Approach from "@components/Approach";
import Banner from "@components/Banner";
import Experince from "@components/Experince";
import Partners from "@components/Partners";
import Projects from "@components/Projects";
import Testimonials from "@components/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Testimonials />
      <Partners />
      <Experince />
      <Approach />
    </>
  );
};

export default Home;
