import React from "react";

const Card = ({ icon: Icon, title, value, bgClass }) => {
  return (
    <div
      className={`flex flex-col md:flex-row h-[150px] w-full max-w-xs md:max-w-sm bg-white shadow-md rounded-lg p-4 justify-between items-center ${bgClass}`}
    >
      {/* Icon */}
      <div className="text-4xl mb-2 text-white md:mb-0 md:mr-4">
        <Icon />
      </div>

      {/* Title and Value */}
      <div className="flex flex-col justify-center items-center md:items-start">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="text-sm text-white font-medium">{value}</p>
      </div>
    </div>
  );
};

export default Card;
