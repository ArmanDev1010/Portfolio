import React, { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MyContext } from "../../context/MyContext";

const Question = (props) => {
  const { isDesktop } = useContext(MyContext);

  const { t } = useTranslation();

  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const showHidden = () => {
    setActive(!active);
  };

  return (
    <div
      className="relative z-[99] border-t-[1px] border-t-[rgba(255,255,255,.1)] px-[2rem] transition-colors duration-[0.3s] max-tablet:bg-[rgba(255,255,255,0.03)] max-tablet:rounded-[12px] max-tablet:mb-[16px] max-tablet:px-[24px]"
      style={
        props.text == "limit" && isDesktop >= 801 ? { borderTop: "none" } : null
      }
    >
      <div
        className="cursor-pointer justify-between items-center py-[1.25rem] flex"
        onClick={showHidden}
      >
        <h3 className="text-white font-[600] text-[1.125rem] leading-[1.8] max-tablet:text-[1rem]">
          {t(`frequent.faq.${props.text}.title`)}
        </h3>
        <div
          className={`min-w-[2rem] h-[2rem] self-start ml-[1.5rem] flex text-white ${
            active ? `rotateArrow` : `rotateBack`
          }`}
        >
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.5303 20.8839C16.2374 21.1768 15.7626 21.1768 15.4697 20.8839L7.82318 13.2374C7.53029 12.9445 7.53029 12.4697 7.82318 12.1768L8.17674 11.8232C8.46963 11.5303 8.9445 11.5303 9.2374 11.8232L16 18.5858L22.7626 11.8232C23.0555 11.5303 23.5303 11.5303 23.8232 11.8232L24.1768 12.1768C24.4697 12.4697 24.4697 12.9445 24.1768 13.2374L16.5303 20.8839Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={active ? `answer answer-divider` : `answer`}
        ref={contentRef}
      >
        <div className="mb-[1.5rem]">
          <p className="text-[#d9d9d9]">
            {t(`frequent.faq.${props.text}.paragraph`)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
