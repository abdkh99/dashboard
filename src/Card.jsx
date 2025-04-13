import React, { useEffect, useRef } from "react";

const Card = ({ children }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // إضافة كلاس تفعيل الأنميشن
            entry.target.classList.add("animate");
            // وقف المراقبة بعد التفعيل
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // العنصر يُعتبر ظاهر إذا كان 10% منه في viewport
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    // تنظيف المراقب عند إزالة العنصر
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="card opacity-0 transform translate-y-5 transition-opacity transition-transform duration-500 ease-in-out"
    >
      {children}
    </div>
  );
};

export default Card;
