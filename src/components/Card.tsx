import React from "react";
import { FcExpired } from "react-icons/fc";
import { AiOutlineAlert } from "react-icons/ai";

interface CardProps {
  icon?: React.ReactNode;
  border?: string;
  title?: string;
  expired?: boolean;
  outStock?: boolean;
  good?: boolean;
}

const Card = ({ icon, border, title, good, expired, outStock }: CardProps) => {
  return (
    <div
      className={`p-6 w-80 bg-white rounded-lg border
     border-gray-200 shadow-md  dark:bg-gray-800
      dark:border-gray-700 dark:hover:bg-gray-700 relative ${
        good
          ? "bg-green-200"
          : expired
          ? "bg-red-200"
          : outStock
          ? "bg-orange-200"
          : ""
      }`}
    >
      <div className="flex">
        <div>
          <h5 className="mb-2 text-md font-bold tracking-tight text-[#525F7F] dark:text-white">
            {title}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-[20px]">
            12
          </p>
        </div>
        <div className="w-20 h-full ml-4 flex items-end justify-center">
          {expired && <FcExpired size={36} color="red" />}
          {outStock && <AiOutlineAlert size={36} color="orange" />}
          {icon}
        </div>
      </div>
      <div
        className={`w-full h-2 absolute bottom-0 left-0 rounded-b-lg `}
        style={{ backgroundColor: border }}
      ></div>
    </div>
  );
};

export default Card;
