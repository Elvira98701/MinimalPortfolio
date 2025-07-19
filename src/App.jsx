import { useEffect, useState } from "react";

import { Route, Routes } from "react-router";

import { Preloader, Header, Contacts, Footer, Modal } from "@components";
import { ModalProvider } from "@components/Modal/ModalProvider";
import { Home, Project } from "@pages";
import { ScrollToTop } from "@utils";
import "@styles/index.scss";

export const App = () => {
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
          <Contacts />
          <Footer />
          <Modal />
        </ModalProvider>
      )}
    </div>
  );
};
