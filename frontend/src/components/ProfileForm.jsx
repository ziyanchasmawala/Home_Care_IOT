import React from "react";

const ProfileForm = () => {
  return (
    <div>
      {/* Form Section */}
      <form className="space-y-2 w-2/3 mx-auto">
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm font-medium">
            First Name
          </label>
          <input
            type="text"
            placeholder="Liam"
            className="mt-1 px-4 py-2 border text-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Harrison"
            className=" px-4 py-2 border text-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="harrison.smith@example.com"
            className="mt-1 px-4 py-2 border text-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm font-medium">
            Contact No.
          </label>
          <input
            type="text"
            placeholder="9654523025"
            className="mt-1 px-4 py-2 border text-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-600 text-sm font-medium">
            Raspberry Pi ID
          </label>
          <input
            type="text"
            placeholder="12345"
            className="mt-1 px-4 py-2 border text-sm border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 mt-5 text-white px-4 py-2 rounded-2xl hover:bg-blue-600 focus:outline-none"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
