import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import ScrollToTop from "@utils/ScrollToTop";

import Home from "@pages/Home";
import Project from "@pages/Project";
import Preloader from "@components/Preloader";
import Header from "@components/Header";
import Modal from "@components/Modal";
import Approach from "@components/Approach";
import Contacts from "@components/Contacts";
import Footer from "@components/Footer";
import { ModalProvider } from "@components/Modal/ModalProvider";

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
        <ModalProvider>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
          <div className="bottom">
            <Approach />
            <Contacts />
            <Footer />
          </div>
          <Modal />
        </ModalProvider>
      )}
    </div>
  );
};

export default App;
