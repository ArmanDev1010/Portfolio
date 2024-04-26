import React from "react";

import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import TiltCard from "../TiltCard";
import { kyacademy } from "../../assets";

const Clients = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-28 max-tablet:pb-24 max-small:!pb-[4rem]">
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
            className="carouselh2 clipText text-center text-[80px] tracking-[-0.2rem] font-[600] text-lightb leading-[1.1] max-w-[800px] max-tablet:text-[4rem] max-phone:text-[2.5rem] max-phone:leading-[1.1]"
          >
            {t("clients.title")}
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
          className="max-w-[1240px] w-full !mx-auto "
        >
          <div className="border-[1.5px] border-[#1a1a1a] !h-[600px] max-medium:!h-[500px] rounded-[1.5vw] w-full flex justify-center max-btablet:flex-col-reverse max-btablet:!h-auto">
            <a
              href="https://www.kya.am/"
              target="_blank"
              className="flex-1 h-full"
            >
              <TiltCard clients={true} />
            </a>
            <div className="bg-primary flex-1 rounded-r-[1.5vw] flex flex-col justify-between p-[2rem] max-btablet:gap-8 max-btablet:!rounded-none max-btablet:!rounded-t-xl max-small:p-6">
              <div className="">
                <img
                  src={kyacademy}
                  alt="KY Academy"
                  className="w-[250px] mb-12 max-medium:mb-6 max-medium:w-[230px] max-btablet:w-[200px]"
                />
                <p className="text-white tracking-[-.04rem] text-[1.7rem] font-[400] leading-[1.2] max-sdesktop:text-2xl max-medium:text-[17px] max-medium:leading-auto max-btablet:text-xl max-small:text-lg">
                  "{t("clients.review")}"
                </p>
              </div>
              <div className="">
                <h3 className="clipText text-xl font-[600] mb-2 max-btablet:text-lg max-btablet:mb-1">
                  {t("clients.person")}
                </h3>
                <p className="text-[#a0a0ab] leading-[1.2] max-btablet:text-sm">
                  {t("clients.role")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Clients;
