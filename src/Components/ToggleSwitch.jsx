import React, { useState } from "react";

const ToggleSwitch = () => {
  const [enabled, setEnabled] = useState(true);

  const toggleSwitch = () => setEnabled(!enabled);

  return (
    <div
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-300"
      } relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer transition-colors duration-300 ease-in-out`}
      onClick={toggleSwitch}
    >
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ease-in-out`}
      />
    </div>
  );
};

export default ToggleSwitch;
