import React from "react";
import { design, conversion, copy } from "../../assets/index";
import { useTranslation } from "react-i18next";

const Carousel = (props) => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-row items-end justify-center">
      <img
        src={
          props.purpose == "design"
            ? design
            : props.purpose == "conversion"
            ? conversion
            : props.purpose == "copy"
            ? copy
            : null
        }
        alt="purpose"
        className="w-full h-full max-w-none object-cover absolute top-0 bottom-0 lrft-0 right-0"
      />
      <div className="conversion_card-content-wrapper w-full h-[30%] opacity-1 flex justify-start items-end -mb-[2px]">
        <div className="relative opacity-98 p-12 relative max-tablet:p-5">
          <div className="-tracking-[0.03rem] text-3xl font-[600] leading-[1.2] text-secondary flex items-center gap-3 max-tablet:text-lg max-tablet:gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 20 20"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
              className="w-[2rem] h-[2 rem]"
            >
              <path
                d="M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.0833 0 12.1083 0.158333 13.075 0.475C14.0417 0.791667 14.9333 1.23333 15.75 1.8L14.3 3.275C13.6667 2.875 12.9917 2.5625 12.275 2.3375C11.5583 2.1125 10.8 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18C12.2167 18 14.1042 17.2208 15.6625 15.6625C17.2208 14.1042 18 12.2167 18 10C18 9.7 17.9833 9.4 17.95 9.1C17.9167 8.8 17.8667 8.50833 17.8 8.225L19.425 6.6C19.6083 7.13333 19.75 7.68333 19.85 8.25C19.95 8.81667 20 9.4 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20ZM8.6 14.6L4.35 10.35L5.75 8.95L8.6 11.8L18.6 1.775L20 3.175L8.6 14.6Z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="text-[#cecece]">
              {t(`mastery.purpose.${props.purpose}`)}
            </span>
          </div>
          <div className="-z-[1] w-3/5 h-1/2 bg-secondary opacity-80 blur-[60px] pointer-none absolute top-auto bottom-0 left-1/2 right-0 transform -translate-x-[70%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
