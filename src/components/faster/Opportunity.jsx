import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { MyContext } from "../../context/MyContext";

defineElement(lottie.loadAnimation);

const Opportunity = (props) => {
  const { isDesktop } = useContext(MyContext);

  const { t } = useTranslation();

  return (
    <div className="bg-[#1a1a1e] p-[1.75rem] border-[1px] border-[rgba(255,255,255,0)] rounded-[1rem] flex flex-col gap-[2rem] transition-[box-shadow_.2s,border_.2s] hover:border-[rgba(0,255,239,.15)] hover:shadow-[inset_0_0_100px_rgba(0,255,239,.12)] max-small:gap-[1.2rem] max-small:p-[1.5rem]">
      <lord-icon
        trigger="loop"
        style={
          isDesktop >= 551
            ? { width: "60px", height: "66px" }
            : { width: "45px", height: "45px" }
        }
        src={`${
          props.text == "lower"
            ? "./animated-svgs/wired-outline-950-attract-customers.json"
            : props.text == "increase"
            ? "./animated-svgs/wired-outline-1445-greek-helmet.json"
            : "./animated-svgs/wired-outline-981-consultation.json"
        }`}
      ></lord-icon>
      <p className="text-[#e2e2e5] tracking-[-0.035rem] text-[1.75rem] leading-[1.2] max-small:text-[1.3rem]">
        {t(`faster.opportunity.${props.text}`)}
      </p>
    </div>
  );
};

export default Opportunity;
