import React from "react";
import { useTranslation } from "react-i18next";

const Motbtns = ({ plan, setActive, active }) => {
  const { t } = useTranslation();

  const handleClick = (e) => {
    setActive(e);
  };

  return (
    <button
      className={`${
        active == "onetime" && plan == "onetime"
          ? "price_tab-link_a"
          : active == "monthly" && plan == "monthly"
          ? "price_tab-link_b"
          : null
      } relative z-[3] text-[#3f3f46] bg-[rgba(255,255,255,0)] border-[1px] border-[rgba(62,177,149,0)] rounded-[50vw] py-[1rem] px-[2rem] font-[600] transition-bg duration-[0.2s] text-[1.5rem] cursor-pointer hover:bg-[#1a1b1c] whitespace-nowrap max-tablet:text-[1.25rem] max-small:text-[1rem] max-smal:px-[1rem] max-small:whitespace-normal`}
      onClick={() => handleClick(plan)}
    >
      {t(`plan.${plan}`)}
    </button>
  );
};

export default Motbtns;
