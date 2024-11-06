import React, { useEffect } from "react";

import TextScroller from "../TextScroller";
import TiltCard from "../TiltCard";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import michalanjelo from "../../assets/michalanjelo.png"

const Main = () => {
  // animation
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  //
  return (
    <div
      className="bg-[#999D9E] text-white font-medium h-screen !overflow-hidden relative"
      id="hero"
    >
      <motion.div
        ref={ref}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        initial="hidden"
        animate={control}
        transition={{ ease: "easeIn", y: { duration: 0.6 } }}
        className="w-full h-full bg-no-repeat bg-contain bg-center max-desktop:bg-cover"
        style={{
          backgroundImage: `url(${michalanjelo})`,
        }}
      ></motion.div>
      <div className="p-6 px-8 absolute top-0">
        <a
          href="https://www.facebook.com/profile.php?id=100092271615808"
          target="_blank"
        >
          <TiltCard />
        </a>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -100 },
        }}
        transition={{
          ease: "linear",
          x: { duration: 0.6, delay: 0.5 },
          opacity: { delay: 0.5 },
        }}
        className="hanger max-stablet:w-full max-stablet:!h-[121px] max-stablet:absolute max-stablet:top-[76%] max-stablet:-translate-y-[76%] max-stablet:w-fit max-stablet:!right-0"
      >
        <p className="big:text-2xl !leading-[1.4] text-lg max-stablet:asbolute max-stablet:right-0 max-stablet:pl-0 max-stablet:z-[2] max-stablet:text-right max-stablet:!pr-6 max-small:hidden">
          Located in <br></br> Armenia
        </p>
        <svg
          width="300px"
          height="121px"
          viewBox="0 0 300 121"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="big:!w-[300px] big:!h-[121px] max-stablet:transform max-stablet:rotate-180 max-stablet:-scale-x-1 max-stablet:absolute max-stablet:top-1/2 max-stablet:transform max-stablet:-translate-y-1/2 max-stablet:right-0 max-small:hidden"
        >
          <title>Combined Shape</title>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Artboard"
              transform="translate(0.000000, -366.000000)"
              fill="#1C1D20"
            >
              <g
                id="Group"
                transform="translate(149.816828, 426.633657) rotate(90.000000) translate(-149.816828, -426.633657) translate(89.816828, 276.816828)"
              >
                <g
                  id="Hanger"
                  transform="translate(60.000000, 149.816828) rotate(-90.000000) translate(-60.000000, -149.816828) translate(-89.816828, 89.816828)"
                >
                  <path
                    d="M239.633657,0 C272.770742,1.0182436e-15 299.633657,26.862915 299.633657,60 C299.633657,93.137085 272.770742,120 239.633657,120 L0,120 L0,0 L239.633657,0 Z M239.633657,18.7755102 C216.866,18.7755102 198.409167,37.232343 198.409167,60 C198.409167,82.767657 216.866,101.22449 239.633657,101.22449 C262.401314,101.22449 280.858147,82.767657 280.858147,60 C280.858147,37.232343 262.401314,18.7755102 239.633657,18.7755102 Z"
                    id="Combined-Shape"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <div className="digital-ball big:!right-[1.65em] big:!top-[1.6em] max-stablet:!top-1/2 max-stablet:!transform max-stablet:!-translate-y-1/2 max-stablet:!right-[9.9em] max-small:!right-0">
          <div className="overlay"></div>
          <div className="globe big:!w-[4.5em] big:!h-[4.5em]">
            <div className="globe-wrap">
              <div className="circle "></div>
              <div className="circle "></div>
              <div className="circle "></div>
              <div className="circle-hor "></div>
              <div className="circle-hor-middle "></div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 100 },
        }}
        initial="hidden"
        transition={{
          ease: "linear",
          x: { duration: 0.6, delay: 0.5 },
          opacity: { delay: 0.5 },
        }}
        className="absolute top-[45%] transform -translate-y-[45%] right-0 max-stablet:top-[80%] max-stablet:-translate-y-[80%] max-stablet:left-6"
      >
        <div className="absolute -top-[12.5vh] max-stablet:-top-[5.5vh]">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className="big:!w-[25px] big:!h-[25px]"
          >
            <title>arrow-up-right</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1.5"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Artboard"
                transform="translate(-1019.000000, -279.000000)"
                stroke="#FFFFFF"
                strokeWidth="1.5"
              >
                <g
                  id="arrow-up-right"
                  transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                >
                  <polyline
                    id="Path"
                    points="2.76923077 0 12 0 12 9.23076923"
                  ></polyline>
                  <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="">
          <p className="big:text-5xl big:leading-[4rem] pr-[3em] text-4xl tracking-tight font-light leading-[3rem] max-bmedium:pr-[2em] max-bmedium:text-3xl max-btablet:text-2xl max-small:text-3xl">
            Freelance
            <br></br>
            Designer & Developer
          </p>
        </div>
      </motion.div>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 100 },
        }}
        initial="hidden"
        transition={{
          ease: "linear",
          y: { duration: 0.6, delay: 1 },
          opacity: { delay: 1 },
        }}
        className="!font-helvetica font-[600] tracking-[-10px] max-stablet:tracking-[-5px] absolute bottom-[12vh] left-0 flex w-full pb-[calc(clamp(1.5em,4vw,2.5em)*1.25)] max-bmedium:pb-0 max-stablet:bottom-0 max-stablet:top-[20%] max-stablet:transform max-stablet:-translate-y-[20%]"
      >
        <TextScroller text="ARMAN MANUKYAN" />
        <TextScroller text="ARMAN MANUKYAN" />
      </motion.div>
    </div>
  );
};

export default Main;
