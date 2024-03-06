import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Opportunity from "./Opportunity";
import { faster } from "../../assets";

const Faster = () => {
  const { t } = useTranslation();

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
    <div className="relative bg-[#131316] !pt-24 max-tablet:!pt-20 flex flex-col justify-center items-center max-small:!pt-[4rem]">
      <img
        src="https://assets-global.website-files.com/659506d2d8118abd35954730/659506d2d8118abd3595489e_Topographic%207.svg"
        alt=""
        className="pointer-events-none absolute top-[0.625rem] bottom-0 left-auto right-auto"
      />
      <div className="relative w-full">
        <div className="px-[5%]">
          <div className="relative pt-0 max-w-[1280px] w-full !mx-auto flex justify-between gap-10 max-medium:flex-col max-medium:justify-start max-tablet:gap-10">
            <div className="flex-[0.5] max-medium:w-full">
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
                {t("faster.reach")}
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
                className="clipText text-[80px] tracking-[-0.2rem] font-[600] text-lightb leading-[1.1] max-w-[800px] max-tablet:text-[3rem] max-small:text-[2.5rem] max-medium:max-w-full"
              >
                {t("faster.scaling")}
              </motion.h2>
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
        </div>
        <div className="px-[5%] pt-[4rem] pb-[2rem] max-tablet:pt-[3rem]">
          <div className="max-w-[1280px] w-full !mx-auto overflow-visible relative">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-x-[2rem] max-sdesktop:grid-cols-[1fr] max-sdesktop:gap-y-[2rem] max-small:gap-y-[1.5rem]">
              <Opportunity text="lower" />
              <Opportunity text="increase" />
              <Opportunity text="build" />
            </div>
          </div>
        </div>
        <div className="px-[5%] relative overflow-hidden">
          <div className="scale_img-wrapper !mx-auto">
            <img src={faster} alt="" />
          </div>
        </div>
        <div className="w-full bg-[rgb(28_28_32)] py-[2.5rem]">
          <div className="scale_banner-text text-center text-[2rem] italic font-[600] leading-[1.2] tracking-[0.3rem] uppercase max-tablet:text-[1.2rem] px-[5%]">
            {t("problems.killer")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faster;
