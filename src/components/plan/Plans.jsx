import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Plan from "./Plan";
import Motbtns from "./Motbtns";

const Plans = () => {
  const { t } = useTranslation();

  const [active, setActive] = useState("monthly");

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
    <div className="bg-primary pb-24 max-tablet:pb-20 max-small:!pb-[4rem] relative">
      <div className="relative w-full">
        <div className="px-[5%]">
          <div className="relative pt-0 max-w-[1280px] w-full !mx-auto flex justify-between gap-10 max-medium:flex-col max-medium:justify-start max-tablet:gap-6">
            <div className="max-w-[700px] max-medium:max-w-full">
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
                {t("plan.plans")}
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
                className="carouselh2 clipText text-[80px] tracking-[-0.2rem] font-[600] text-lightb leading-[1.1] max-w-[600px] max-tablet:text-[3rem] max-small:text-[2.5rem]"
              >
                {t("plan.start")}
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            ease: "easeIn",
            y: { duration: 0.4, delay: 0.2 },
            opacity: { delay: 0.2 },
          }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 100 },
          }}
          className="px-[5%] pt-[3.75rem] max-medium:pt-[2rem] max-medium:w-full"
        >
          <div className="max-w-[1280px] relative pt-0 w-full !mx-auto">
            <div className="grid gap-[2.25rem] grid-cols-[1fr_1fr] auto-cols-[1fr] max-medium:grid-rows-[auto_auto] max-medium:grid-cols-[1fr]">
              <Plan plan="startup" />
              <Plan plan="onestartup" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Plans;
