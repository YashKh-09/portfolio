import { useState, useEffect } from "react";

const config = {
  success: {
    border: "#6d8a7d",
    bg: "rgba(109, 138, 125, 0.1)",
    text: "#6d8a7d",
    icon: "\u2713",
  },
  error: {
    border: "#b8a58b",
    bg: "rgba(184, 165, 139, 0.1)",
    text: "#b8a58b",
    icon: "\u2715",
  },
  info: {
    border: "#3a3a3a",
    bg: "rgba(58, 58, 58, 0.1)",
    text: "#a0a0a0",
    icon: "\u2139",
  },
  warning: {
    border: "#b8a58b",
    bg: "rgba(184, 165, 139, 0.1)",
    text: "#b8a58b",
    icon: "!",
  },
};

export default function Toast({
  message,
  type = "info",
  duration = 5000,
  onClose,
}) {
  const [isExiting, setIsExiting] = useState(false);
  const { border, bg, text, icon } = config[type] || config.info;

  useEffect(() => {
    if (duration <= 0) return;

    const exitTimer = setTimeout(() => setIsExiting(true), duration - 300);
    const closeTimer = setTimeout(onClose, duration);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 min-w-[320px] max-w-md transition-all duration-300 ${
        isExiting ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
      }`}
      role="alert"
      aria-live="polite"
    >
      <div
        className="relative border p-4 shadow-lg backdrop-blur-sm"
        style={{ borderColor: border, backgroundColor: bg }}
      >
        <div className="flex items-start gap-3">
          <span
            className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold"
            style={{ backgroundColor: text, color: "#0a0a0a" }}
          >
            {icon}
          </span>

          <p className="flex-1 text-sm text-text pr-6 leading-relaxed">
            {message}
          </p>

          <button
            onClick={handleClose}
            className="absolute top-3 right-3 text-muted hover:text-text transition-colors text-sm leading-none"
            aria-label="Close notification"
          >
            &#10005;
          </button>
        </div>

        {duration > 0 && (
          <div
            className="absolute bottom-0 left-0 h-0.5"
            style={{
              backgroundColor: text,
              animation: `progress ${duration}ms linear forwards`,
            }}
          />
        )}
      </div>
    </div>
  );
}
