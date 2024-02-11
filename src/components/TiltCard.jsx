import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { shadowkyacademy, lilit } from "../assets/index";

const TiltCard = (props) => {
  const ref = useRef(null);
  const ROTATION_RANGE = 22.5;
  const HALF_ROTATION_RANGE = 22.5 / 2;
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = mouseX / width - HALF_ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return props.clients ? (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative w-full h-full max-btablet:!w-full max-btablet:!h-[400px] max-small:!h-[300px] max-smal:!h-[250px]"
    >
      <div
        style={{
          transform: "translateZ(70px)",
          backgroundImage: `url(${lilit})`,
        }}
        className="splen relative w-full h-full bg-top bg-cover bg-no-repeat max-btablet:!rounded-none max-btablet:!rounded-b-xl max-small:bg-top"
      ></div>
    </motion.div>
  ) : (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-16 w-fit flex items-center justify-center cursor-pointer"
    >
      <p
        style={{
          transform: "translateZ(50px)",
        }}
        className="text-lg"
      >
        © Code by Arman
      </p>
    </motion.div>
  );
};

export default TiltCard;
