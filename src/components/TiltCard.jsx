import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const TiltCard = () => {
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

  return (
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
