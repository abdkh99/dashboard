import React, { useState } from "react";

// مجرد أيقونة رمزية لعرضها في البطاقات.
// يمكنك استبدالها بصور أو SVG أو أيقونات حقيقية.
const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

function CharacterSelector() {
  // الحالة الافتراضية: "Sigma"
  const [selected, setSelected] = useState("Sigma");

  // قائمة الشخصيات (أو الخيارات)
  const characters = [{ name: "Megaman" }, { name: "Zero" }, { name: "Sigma" }];

  return (
    <div className="flex space-x-1 max-sm:flex-wrap justify-center w-full no-select">
      {characters.map((char) => {
        const isSelected = selected === char.name;

        return (
          <label
            key={char.name}
            // نجعل العنصر قابلاً للنقر
            // ونستفيد من تنسيقات Tailwind حسب حالة التحديد
            className={`
              cursor-pointer p-4 rounded-md border-2
              flex flex-col items-center justify-center 
              transition-colors w-64 flex-1
              ${
                isSelected
                  ? "border-blue-500 text-blue-600"
                  : "border-gray-200 text-black hover:bg-gray-100"
              }
            `}
          >
            {/* الراديو الفعلي - مخفي لأجل الأكسسيبيليتي */}
            <input
              type="radio"
              name="character"
              value={char.name}
              checked={isSelected}
              onChange={() => setSelected(char.name)}
              className="hidden"
            />
            {/* الأيقونة */}
            <Icon />
            {/* النص */}
            <span className="mt-2">{char.name}</span>
          </label>
        );
      })}
    </div>
  );
}

export default CharacterSelector;
