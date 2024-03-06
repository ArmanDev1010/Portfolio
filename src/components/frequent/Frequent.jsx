import React from "react";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import Question from "./Question";

const Frequent = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#131316] py-28 max-tablet:pb-24 max-small:!pb-[2rem] relative">
      <div className="relative px-[5%]">
        <div className="max-w-[48rem] w-full !mx-auto relative overflow-visible mb-16 max-tablet:mb-10 max-phone:mb-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              ease: "easeIn",
              y: { duration: 0.4 },
            }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 100 },
            }}
            className="clipText text-center text-[80px] tracking-[-0.2rem] font-[600] text-lightb leading-[1.1] max-w-[800px] max-tablet:text-[4rem] max-phone:text-[2.5rem] max-phone:leading-[1.1]"
          >
            {t("frequent.title")}
          </motion.h2>
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
          className="max-w-[48rem] w-full !mx-auto bg-[#1a1a1e] border-[1px] border-[#242429] rounded-[12px] overflow-hidden max-tablet:bg-[rgba(255,255,255,0)] max-tablet:border-none max-tablet:!p-0"
        >
          {["limit", "fast", "work"].map((text, key) => (
            <Question key={key} text={text} />
          ))}
        </motion.div>
      </div>
      <div className="glow-behind-faq is-home"></div>
      <div className="faq_fade"></div>
      <div className="faq_fade is-bottom"></div>
    </div>
  );
};

export default Frequent;
