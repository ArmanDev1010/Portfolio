import React, { useEffect, useState } from "react";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { translationAM } from "./languages";

import { Main, Mastery, Clients, Problems } from "./components";

import { MyContext } from "./context/MyContext";

const resources = {
  am: {
    translation: translationAM,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language"),
  fallbackLng: "am",
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
      <div className="font-montserratarm overflow-hidden">
        <MyContext.Provider
          value={{
            isDesktop,
          }}
        >
          <Main />
          <Mastery />
          <Clients />
          <Problems />
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default App;
