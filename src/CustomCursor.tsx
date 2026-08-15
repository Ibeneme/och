import React, { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<Position>({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Cast target to HTMLElement safely
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.getAttribute("role") === "button" ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
    };

    window.addEventListener("mousemove", updateCursor);
    return () => {
      window.removeEventListener("mousemove", updateCursor);
    };
  }, []);

  useEffect(() => {
    if (isHovering) {
      document.body.style.cursor = "auto";
    } else {
      document.body.style.cursor = "none";
    }
  }, [isHovering]);

  return (
    <div
      className={`fixed pointer-events-none z-50 w-3 h-3 bg-black rounded-full transition-opacity duration-75 ${
        isHovering ? "opacity-0" : "opacity-100"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};
