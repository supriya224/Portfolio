import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      target.current = {
        x: event.clientX,
        y: event.clientY,
      };

      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    let frame: number;

    const animate = () => {
      current.current.x +=
        (target.current.x - current.current.x) * 0.15;

      current.current.y +=
        (target.current.y - current.current.y) * 0.15;

      setPosition({
        x: current.current.x,
        y: current.current.y,
      });

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      {/* Cursor arrow */}
      <svg
        width="38"
        height="20"
        viewBox="0 0 38 46"
        fill="none"
        className="absolute left-0 top-0"
      >
        <path
          d="M3 2L35 20L19 23L14 42L3 2Z"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Label */}
      <div
        className="
          absolute
          left-[43px]
          top-[8px]
          whitespace-nowrap
          rounded-[10px]
          bg-white
          px-5
          py-3
          text-[12px]
          font-semibold
          leading-none
          tracking-[-0.03em]
          text-neutral-950
          shadow-[0_6px_30px_rgba(0,0,0,0.10)]
          animate-cursor-float
        "
      >
        Designer
      </div>
    </div>
  );
}