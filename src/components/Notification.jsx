import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NotificationSidebar = ({ isOpen, onClose, notifications }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ width: "300px", maxWidth: "100%", zIndex: 40 }} // Ensure it works on smaller screens
    >
      <div
        className="p-4 flex justify-between items-center border-b"
        style={{ backgroundColor: "#AED260" }}
      >
        <h2 className="text-lg font-semibold text-white">Pemberitahuan</h2>
        <button
          onClick={onClose}
          className="text-lg font-semibold text-white"
          aria-label="Close notification sidebar" // Added for accessibility
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="p-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <div key={index} className="mb-4 p-2 border-b">
              {notification}
            </div>
          ))
        ) : (
          <p className="text-gray-500">Tidak ada pemberitahuan.</p> // Handle no notifications
        )}
      </div>
    </div>
  );
};

export default NotificationSidebar;
