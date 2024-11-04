import React from "react";

import { logo } from "../../assets";

import { FiPhone } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { TbMail } from "react-icons/tb";

const Footer = () => {
  return (
    <div className="bg-primary pt-24 max-tablet:pt-20 max-small:!pt-[4rem] relative">
      <div className="px-[5%] relative">
        <div className="max-w-[80rem] w-full !mx-auto relative">
          <div className="w-full pt-[2.5rem] pb-[3rem] text-[0.875rem] leading-[1.2] grid items-center justify-between auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] border-t-[2px] border-t-[#1a1a1e] tracking-[-0.02625rem] text-[#a0a0ab] gap-[16px] max-medium:gap-[3rem] max-medium:flex max-medium:flex-col">
            <a href="#hero">
              <img src={logo} alt="" className="w-[400px]" />
            </a>
            <div className="flex items-center gap-[1rem] justify-end">
              <a
                href="tel:+37498627272"
                className="gap-[0.75rem] text-white tracking-[0.02rem] whitespace-nowrap flex-nowrap px-[2rem] text-[1rem] font-[700] no-underline flex capitalize border-[1.5px] border-[#1a1a1e] rounded-[50vw] justify-center items-center p-[1rem] transition-border duration-[0.2s] hover:border-white"
              >
                <FiPhone className="w-[24px] h-[24px]" />
                <div className="">+374 98 62 72 72</div>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100092271615808"
                target="_blank"
                className="text-white border-[1.5px] border-[#1a1a1e] rounded-[50vw] p-[1rem] pl-[1.1rem] transition-border duration-[0.2s] hover:border-white"
              >
                <BsFacebook className="w-[24px] h-[24px]" />
              </a>
              <a
                href="mailto:arman.manukyan4.y@gmail.com"
                target="_blank"
                className="text-white border-[1.5px] border-[#1a1a1e] rounded-[50vw] p-[1rem] pl-[1.1rem] transition-border duration-[0.2s] hover:border-white"
              >
                <TbMail className="w-[26px] h-[26px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
