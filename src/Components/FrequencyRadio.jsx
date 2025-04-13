import React, { useState } from "react";

function CustomRadio() {
  const [selected, setSelected] = useState("Daily");

  return (
    <div className="flex flex-col space-y-3 no-select">
      {["Daily", "Weekly", "Monthly"].map((option) => (
        <label key={option} className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="customRadio"
            value={option}
            checked={selected === option}
            onChange={(e) => setSelected(e.target.value)}
            className="peer sr-only"
          />
          <div
            className="w-6 h-6 rounded-full border-2 border-gray-300 relative
                          peer-hover:border-blue-500 peer-checked:border-blue-600 
                          transition-colors flex items-center justify-center

                          before:content-[''] before:w-5 before:h-3 before:bg-blue-600 before:top-50% before:-translate-x-[-0.3rem] before:rounded-full before:scale-0 
                          before:peer-checked:scale-100 before:transition-transform before:duration-200"
          >
            <div
              className="w-4 h-4 bg-blue-600 rounded-full 
                            scale-0 peer-checked:scale-100 
                            transition-transform duration-200"
            ></div>
          </div>
          <span className="ml-3 text-gray-700">{option}</span>
        </label>
      ))}
    </div>
  );
}

export default CustomRadio;
