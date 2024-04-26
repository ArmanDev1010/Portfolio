import React from "react";
import { useTranslation } from "react-i18next";

const Plan = (props) => {
  const { t } = useTranslation();

  const benefits =
    props.plan == "startup" || props.plan == "enterprise"
      ? ["1", "2", "3", "4", "5", "6"]
      : ["1", "2", "3", "4", "5"];

  return (
    <div
      className="rounded-[1rem] p-[2rem] text-white"
      style={{
        backgroundImage: "linear-gradient(rgba(19,19,22,0), #131316)",
      }}
    >
      <div className="grid gap-[2rem] grid-cols-[1fr] auto-cols-[1fr] grid-rows-[auto_auto_auto]">
        <div className="flex gap-[2rem] flex-col flex-wrap items-center justify-center text-center">
          <div className="tracking-[-0.06rem] text-[2.3rem] font-[600] leading-[1.2]">
            <span className="opacity-50 text-[2.3rem] font-[100]">≈</span>
            {t(`plan.${props.plan}.price`)}
            {props.plan == "onestartup" ||
            props.plan == "oneenterprise" ? null : (
              <span className="opacity-60 text-[1.5rem] font-[300]">
                {t("plan.month")}
              </span>
            )}
          </div>
          <a href="tel:+37498627272">
            <div
              className="button-n text-[#0d121c] tracking-[-0.02rem] capitalize border-[3px] border-[#6a6b6a] rounded-[50vw] py-[1rem] px-[3rem] font-[700] leading-[1.2] no-underline text-[1.25rem] max-phone:text-[1.1rem] text-center"
              style={{
                background:
                  "radial-gradient(110.56% 100% at 50% 0%, #FFF 71.77%, #ADD9BF 100%)",
                transition:
                  "color .2s cubic-bezier(.77,0,.175,1), box-shadow .2s cubic-bezier(.77,0,.175,1), filter .2s cubic-bezier(.77,0,.175,1), border .2s cubic-bezier(.77,0,.175,1)",
              }}
            >
              {t("plan.call")}
            </div>
            <p className="text-center pt-3 opacity-60">+374 98 62 72 72</p>
          </a>
        </div>
        <div className="w-full h-[2px] bg-[#1a1a1e]"></div>
        <ul className="grid gap-[0.875rem] grid-rows-[auto_auto] grid-cols-[1fr_1fr] auto-cols-[1fr] max-phone:flex max-phone:flex-col">
          {benefits.map((text, key) => (
            <li key={key} className="w-full gap-[0.5rem] items-center flex">
              <svg
                className="w-[1.5rem] h-[1.5rem] flex-[none]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <mask
                  id="mask0_1292_1323"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                >
                  <rect width="24" height="24" fill="currentColor"></rect>
                </mask>
                <g mask="url(#mask0_1292_1323)">
                  <path
                    d="M12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.0833 2 14.1083 2.15833 15.075 2.475C16.0417 2.79167 16.9333 3.23333 17.75 3.8L16.3 5.275C15.6667 4.875 14.9917 4.5625 14.275 4.3375C13.5583 4.1125 12.8 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 11.7 19.9833 11.4 19.95 11.1C19.9167 10.8 19.8667 10.5083 19.8 10.225L21.425 8.6C21.6083 9.13333 21.75 9.68333 21.85 10.25C21.95 10.8167 22 11.4 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM10.6 16.6L6.35 12.35L7.75 10.95L10.6 13.8L20.6 3.775L22 5.175L10.6 16.6Z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <p className="text-[#a0a0ab] tracking-[-0.02rem] font-[500] leading-[1.2]">
                {t(`plan.${props.plan}.benefits.${text}`)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Plan;
