import React from "react";
import Card from "./Card";
import {
  FaThermometerHalf,
  FaTint,
  FaVolumeUp,
  FaRunning,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="p-4 w-full">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <Card
          icon={FaThermometerHalf}
          title="Temperature"
          value="18°C"
          bgClass="bg-gradient-to-r from-[#F7B733] to-[#FC4A1A]"
        />
        <Card
          icon={FaTint}
          title="Humidity"
          value="31-60%"
          bgClass="bg-gradient-to-r from-[#0052D4] to-[#4364F7] via-[#6FB1FC]"
        />
        <Card
          icon={FaVolumeUp}
          title="Sound"
          value="41-80 dB"
          bgClass="bg-gradient-to-r from-[#EDDE5D] to-[#F09819]"
        />
        <Card
          icon={FaRunning}
          title="Motion"
          value="11-50"
          bgClass="bg-gradient-to-r from-[#A8E063] to-[#56AB2F]"
        />
      </div>
    </div>
  );
};

export default Header;
