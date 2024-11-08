import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { after, before } from "../../assets";

const Problems = () => {
  const { t } = useTranslation();

  const [percentage, isPercentage] = useState("60%");

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

  const onMouseMove = (e) => {
    // Calculate the center coordinates of the circle
    let centerX =
      (Math.round(e.clientX - e.target.getBoundingClientRect().left) /
        e.target.offsetWidth) *
      100;

    isPercentage(100 - centerX.toFixed(2));
  };

  return (
    <div className="bg-primary">
      <div className="relative w-full">
        <div className="px-[5%]">
          <div className="relative pt-0 max-w-[1280px] w-full !mx-auto flex justify-between gap-10 max-sdesktop:flex-col max-sdesktop:justify-start max-tablet:gap-10">
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
                {t("problems.problem")}
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
                className="carouselh2 clipText text-[80px] tracking-[-0.2rem] font-[600] text-lightb leading-[1.1] max-w-[800px] max-tablet:text-[3rem] max-small:text-[2.5rem] max-medium:max-w-full"
              >
                {t("problems.missing")}
              </motion.h2>
            </div>
            <div className="self-end flex flex-col gap-8 flex-[0.5] max-w-[31.125rem] max-sdesktop:self-start max-sdesktop:gap-6">
              <p className="text-[#a0a0ab] -tracking-[0.0275rem] text-[1.375rem] max-medium:text-[18px]">
                {t("problems.website.one")}
              </p>
              <p className="text-[#a0a0ab] -tracking-[0.0275rem] text-[1.375rem] max-medium:text-[18px]">
                {t("problems.website.two")}
              </p>
              <p className="text-[#a0a0ab] -tracking-[0.0275rem] text-[1.375rem] max-medium:text-[18px]">
                {t("problems.website.three")}
              </p>
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
        <div className="px-[5%] pt-[4rem]">
          <div className="max-w-[1280px] w-full !mx-auto overflow-visible relative max-tablet:pt-8">
            <div
              className="splitter_component is-radius"
              onMouseMove={(ev) => onMouseMove(ev)}
            >
              <div className="splitter_before">
                <img src={before} alt="" className="splitter_image" />
              </div>
              <div
                className="spliter_after"
                style={{ width: `${percentage}%` }}
              >
                <img src={after} alt="" className="splitter_image is-after" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problems;
