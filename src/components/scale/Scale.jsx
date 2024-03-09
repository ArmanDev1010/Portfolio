import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ScaleList from "./ScaleList";

const Scale = () => {
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
    <div className="bg-primary !py-24 max-tablet:!py-[4rem]">
      <div className="relative w-full">
        <div className="px-[5%]">
          <div className="relative pt-0 max-w-[1280px] w-full !mx-auto flex justify-between gap-10 max-medium:flex-col max-medium:justify-start max-tablet:gap-10">
            <div className="max-medium:w-full">
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
                {t("scale.why")}
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
                className="carouselh2 clipText text-[80px] tracking-[-0.2rem] font-[600] text-lightb leading-[1.1] max-w-[900px] max-tablet:text-[3rem] max-small:text-[2.5rem] max-medium:max-w-full"
              >
                {t("scale.title")}
              </motion.h2>
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
        <div className="px-[5%] mt-12 relative max-small:px-[0%]">
          <div className="max-w-[1280px] relative pt-0 max-w-[1280px] w-full !mx-auto">
            <ul className="">
              {["features"].map((text, key) => (
                <ScaleList key={key} text={text} />
              ))}
            </ul>
            <ul className="max-small:px-[2%]">
              {[
                "eye",
                "world",
                "sales",
                "responsive",
                "lightning",
                "smooth",
                "unlimited",
                "swift",
              ].map((text, key) => (
                <ScaleList key={key} text={text} />
              ))}
            </ul>
            <div className="glow-behind-faq"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scale;
