import React from "react";
import { Link } from "react-router-dom";

const WebsiteCard = ({ name, description, url, page }) => {
  return (
    <div
      className="
      bg-[#111827]
      border border-[#3EB8D4]
      rounded-[16px]
      p-4 sm:p-6
      transition duration-300
      hover:-translate-y-[4px]
      hover:border-[#3EB8D4]/80
      hover:shadow-[0_12px_30px_rgba(0,0,0,0.6)]
      flex flex-col
      "
    >

      {/* Preview */}
      <div className="aspect-video bg-[#0D1424] border border-[#1C2540] rounded-md mb-3 sm:mb-4 flex items-center justify-center">
        <span className="text-xs sm:text-sm text-[#4B5D7A]">Preview</span>
      </div>

      {/* Title */}
      <h3 className="text-[16px] sm:text-[18px] font-semibold mb-2 text-[#F0F4FF]">
        {name}
      </h3>

      {/* Description */}
      <p className="text-[13px] sm:text-[14px] text-[#B8C2D9] flex-grow leading-[1.6]">
        {description}
      </p>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">

        <Link
          to={page}
          className="
          flex-1 text-center
          bg-[#111827] border border-[#3EB8D4] text-[#3EB8D4]
          px-4 py-2 rounded-full text-xs sm:text-sm font-semibold
          hover:bg-[#3EB8D4] hover:text-[#071018]
          transition
          "
        >
          Details
        </Link>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="
          flex-1 text-center
          bg-[#3EB8D4] text-[#071018]
          px-4 py-2 rounded-full text-xs sm:text-sm font-bold
          hover:bg-[#6FE3FF]
          transition
          "
        >
          Visit
        </a>

      </div>

    </div>
  );
};

export default WebsiteCard;