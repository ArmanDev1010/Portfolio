import React, { useContext, useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { MyContext } from "../context/MyContext";

const TextScroller = ({ text, second }) => {
  const { isDesktop } = useContext(MyContext);

  const [key, setKey] = useState(1);
  const [leftValue, setLeftValue] = useState(isDesktop + 500);

  const scrolling = useSpring({
    from: { transform: "translate(0%,0)" },
    to: { transform: "translate(-100%,0)" },
    config: { duration: 15000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  useEffect(() => {
    setLeftValue(isDesktop + 500);
  }, [isDesktop]);

  const isSecond = second ? { left: `${leftValue}px` } : null;

  let textStyles = Object.assign({}, scrolling, isSecond);

  return (
    <animated.div
      key={key}
      className="relative flex items-center"
      style={textStyles}
    >
      <h1 className="relative flex items-center text-[max(9em,13vw)] whitespace-nowrap pointer-events-none leading-4 max-stablet:text-[max(5em,17vw)]">
        {text}
        <span className="px-[3vw]">—</span>
      </h1>
    </animated.div>
  );
};

export default TextScroller;
