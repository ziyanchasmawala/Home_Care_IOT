import React from "react";
import profile_icon from "../assets/profile_icon.svg";
import profile_header from "../assets/profile_header.svg"; // Add your header image here
import { RiImageEditLine } from "react-icons/ri";
import ProfileForm from "../components/ProfileForm";
import house from "../assets/house.svg";

const Profile = () => {
  return (
    <div className="flex flex-col flex-grow p-4">
      <div className="w-full bg-white rounded-2xl shadow-lg pb-4 flex flex-col items-center relative">
        {/* Header Section */}
        <header className="w-full flex justify-center relative z-0">
          <img
            src={profile_header}
            alt="Header"
            className="w-full object-cover"
          />
        </header>

        {/* Profile Picture Section */}
        <div className="relative z-10 -mt-16 flex flex-col items-center">
          <div className="relative">
            <img
              className="h-32 w-32 rounded-full object-cover"
              src={profile_icon}
              alt="Profile"
            />
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full border-2 border-white p-2 hover:bg-blue-600 focus:outline-none">
              <span className="text-lg">
                <RiImageEditLine />
              </span>
            </button>
          </div>
          <button className="mt-4 bg-blue-500 font-semibold text-white text-sm px-4 py-2 rounded-xl hover:bg-blue-600">
            Change Password
          </button>
        </div>


        <div className="flex flex-row items-center justify-between w-full p-6">
          {/* Profile Form Section1700 668*/}
          <div className="flex-1">
            <ProfileForm />
          </div>
          <div className="flex-1 justify-items-center">
            <img src={house} className="w-full h-auto max-w-[668px]" alt="house"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
