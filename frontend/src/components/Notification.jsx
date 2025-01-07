import React, { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

function Notification({ showNotification, toggleNotification }) {
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    if (showNotification) {
      setSlideIn(true);
    } else {
      setSlideIn(false);
    }
  }, [showNotification]);

  return (
    <div
      className={`fixed top-0 right-0 w-1/4 h-screen bg-white shadow-lg z-50 transition-transform duration-500 ease-out ${
        slideIn ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-xl font-bold text-blue-500">Notifications</h2>
        <button
          onClick={toggleNotification}
          className="text-gray-500 text-xl hover:text-gray-800 focus:outline-none"
        >
          <IoCloseCircleOutline />
        </button>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <p>No fall events have been detected today</p>
          <hr className="my-4" />
        </div>
        <div>
          <p>
            The system continues to monitor your movements throughout the house
            to ensure your safety. In case of any unusual activity, you will
            receive an immediate alert.
          </p>
          <hr className="my-4" />
        </div>
        <div>
          <p>No fall events have been detected today</p>
          <hr className="my-4" />
        </div>
        <div>
          <p>
            The system keeps an eye on your activities around the home to
            guarantee your safety. If anything out of the ordinary occurs,
            you'll get an instant notification.
          </p>
          <hr className="my-4" />
        </div>
      </div>
    </div>
  );
}

export default Notification;
