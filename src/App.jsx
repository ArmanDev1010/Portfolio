import React, { useEffect, useState } from "react";

import { Main, Mastery } from "./components";

import { MyContext } from "./context/MyContext";

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <div className="">
      <div className="font-montserratarm">
        <MyContext.Provider
          value={{
            isDesktop,
          }}
        >
          <Main />
          <Mastery />
        </MyContext.Provider>
      </div>
    </div>
  );
};

export default App;
