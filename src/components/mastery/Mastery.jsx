import React, { useCallback, useEffect, useRef } from "react";
import SwiperCarousel from "./SwiperCarousel";
import { useTranslation } from "react-i18next";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Mastery = () => {
  const { t } = useTranslation();

  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  // animation
  const control = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [inView]);

  return (
    <div className="bg-primary py-24 max-tablet:py-16">
      <div className="relative w-full">
        <div className="px-[5%]">
          <div className="relative mb-12 pt-0 max-w-[1280px] w-full !mx-auto flex justify-between gap-10 max-medium:flex-col max-medium:justify-start max-tablet:gap-6 max-tablet:mb-8">
            <div className="">
              <motion.p
                ref={ref}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
                initial="hidden"
                animate={control}
                transition={{ ease: "easeIn", x: { duration: 0.4 } }}
                className="uppercase mb-3 font-[600] tracking-[0.15rem] text-xl italic pl-3 border-l border-l-[4px] border-secondary text-secondary max-tablet:text-base max-tablet:border-l-[3px]"
              >
                {t("mastery.increasing")}
              </motion.p>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  ease: "easeIn",
                  x: { duration: 0.4, delay: 0.2 },
                  opacity: { delay: 0.2 },
                }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
                className="clipText text-[80px] tracking-[-0.2rem] font-[600] text-lightb leading-[1.1] max-w-[800px] max-tablet:text-[3rem] max-small:text-[2.5rem]"
              >
                {t("mastery.mastery")}
              </motion.h2>
            </div>
            <div className="self-end flex gap-6 max-medium:self-start max-tablet:gap-4">
              <div
                className="prev-arrow cursor-pointer w-[5.5rem] h-[5.5rem] border border-secondary opacity-80 bg-[rgba(255,255,255,0)] transition-bg hover:bg-[rgba(91,179,128,.2)] rounded-[50vw] justify-center items-center flex text-secondary max-tablet:w-[3.5rem] max-tablet:h-[3.5rem]"
                onClick={handlePrev}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 48 48"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                  className="!w-[48px] !h-[48px]"
                >
                  <path
                    d="M15.6501 22.0001L40.0001 22.0001L40.0001 26.0001L15.6501 26.0001L26.8501 37.2001L24.0001 40.0001L8.00006 24.0001L24.0001 8.00013L26.8501 10.8001L15.6501 22.0001Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div
                className="next-arrow cursor-pointer w-[5.5rem] h-[5.5rem] border border-secondary opacity-80 bg-[rgba(255,255,255,0)] transition-bg hover:bg-[rgba(91,179,128,.2)] rounded-[50vw] justify-center items-center flex text-secondary max-tablet:w-[3.5rem] max-tablet:h-[3.5rem]"
                onClick={handleNext}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                  className="!w-[48px] !h-[48px]"
                >
                  <path
                    d="M32.3501 26.0001H8.00006V22.0001H32.3501L21.1501 10.8001L24.0001 8.00012L40.0001 24.0001L24.0001 40.0001L21.1501 37.2001L32.3501 26.0001Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <motion.div
              ref={ref}
              variants={{
                visible: { opacity: 1, x: 0 },
                hidden: { opacity: 0, x: -100 },
              }}
              initial="hidden"
              animate={control}
              transition={{ ease: "easeIn", x: { duration: 0.4 } }}
              className="z-[1] w-[100px] h-[100px] bg-secondary blur-[120px] rounded-[50vw] absolute top-[50%] bottom-auto left-0 right-0 transform -translate-x-1/2 -translate-y-1/2"
            ></motion.div>
          </div>
        </div>
        <div className="max-w-[1280px] w-full !mx-auto overflow-visible relative">
          <SwiperCarousel sliderRef={sliderRef} />
        </div>
      </div>
    </div>
  );
};

export default Mastery;
