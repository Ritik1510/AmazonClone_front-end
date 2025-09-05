import { useState } from "react";

function Tooltip({ children, message }: { children: React.ReactNode; message: string }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
          {message}
        </div>
      )}
    </div>
  );
}
export default Tooltip;