import React from "react";
import { useTranslation } from "react-i18next";

const ScaleList = (props) => {
  const { t } = useTranslation();
  return props.text == "features" ? (
    <li className="bg-[#131316] rounded-[1rem] grid items-center pl-[2.5rem] auto-cols-[1fr] gap-x-[1.5rem] grid-rows-[auto] grid-cols-[2.5fr_1fr_1fr] py-[1.5rem] relative max-stablet:pl-[1.5rem] max-small:gap-x-0 max-small:pl-[1rem] max-small:rounded-none max-small:pr-[10px]">
      <h4 className="text-[#a0a0ab] tracking-[0.225rem] text-[1.125rem] font-[600] uppercase leading-[1.2] max-stablet:text-[18px] max-small:text-[16px]">
        {t(`scale.list.${props.text}`)}
      </h4>
      {["us", "others"].map((text, key) => (
        <div className="flex items-center justify-center text-center" key={key}>
          <p className="text-[#e2e2e5] tracking-[-0.03rem] text-[1.5rem] font-[600] leading-[1.2] max-stablet:text-[20px] max-small:text-[17.6px] max-smal:text-[1rem]">
            {t(`scale.${text}`)}
          </p>
        </div>
      ))}
    </li>
  ) : (
    <li className="grid items-center pl-[2.5rem] auto-cols-[1fr] gap-x-[1.5rem] grid-rows-[auto] grid-cols-[2.5fr_1fr_1fr] py-[1.5rem] relative max-stablet:pl-[1.5rem] max-small:gap-x-0 max-small:pl-[1rem]">
      <h4 className="text-[#e2e2e5] tracking-[-0.03rem] text-[1.5rem] font-[600] leading-[1.2] max-stablet:text-[20px] max-small:text-[17.6px]">
        {t(`scale.list.${props.text}`)}
      </h4>
      <div className="flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29px"
          height="29px"
          viewBox="0 0 29 29"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          role="img"
        >
          <g mask="url(#mask0_1176_132)">
            <path
              d="M11.5387 21.75L4.65118 14.8625L6.37306 13.1406L11.5387 18.3062L22.6251 7.21979L24.347 8.94166L11.5387 21.75Z"
              fill="#00ffef"
            ></path>
          </g>
        </svg>
      </div>
      <div className="flex items-center justify-center">
        {props.text == "responsive" || props.text == "lightning" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29px"
            height="29px"
            viewBox="0 0 29 29"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            role="img"
          >
            <g mask="url(#mask0_1176_132)">
              <path
                d="M11.5387 21.75L4.65118 14.8625L6.37306 13.1406L11.5387 18.3062L22.6251 7.21979L24.347 8.94166L11.5387 21.75Z"
                fill="#00ffef"
              ></path>
            </g>
          </svg>
        ) : (
          <img
            src="https://assets-global.website-files.com/659506d2d8118abd35954730/659506d2d8118abd359548b3_Table%20X.svg"
            alt="X"
          />
        )}
      </div>
      <div
        className="w-full h-[2px] opacity-25 absolute top-auto bottom-0 left-0 right-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.5) 50%,rgba(255,255,255,0))",
        }}
      ></div>
    </li>
  );
};

export default ScaleList;
