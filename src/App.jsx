import React, { useEffect, useState } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationEN } from "./languages";

import {
  Main,
  Mastery,
  Clients,
  Problems,
  Scale,
  Faster,
  Plans,
  Frequent,
  Footer,
} from "./components";

import { MyContext } from "./context/MyContext";

const resources = {
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language"),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <div className="">
      <div className="font-inter overflow-hidden">
        <MyContext.Provider
          value={{
            isDesktop,
          }}
        >
          <Main />
          <Mastery />
          <Clients />
          <Problems />
          <Faster />
          <Scale />
          <Plans />
          <Frequent />
          <Footer />
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default App;
