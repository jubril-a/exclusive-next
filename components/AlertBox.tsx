'use client'

import { useEffect, useState, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline"

interface AlertBoxProps {
  heading: string;
  message: string;
  onClose?: () => void;
}

const AlertBox: React.FC<AlertBoxProps> = ({ heading, message, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const alertRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-close after 10 seconds
    const timer = setTimeout(() => {
      handleClose();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle click outside
    const handleClickOutside = (event: MouseEvent) => {
      if (alertRef.current && !alertRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div
        ref={alertRef}
        className="absolute bottom-4 right-4 bg-white rounded-lg shadow-xl p-4 max-w-sm w-full pointer-events-auto animate-fade-in"
      >
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-900">{heading}</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <XMarkIcon className="size-8" />
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-3">{message}</p>
      </div>
    </div>
  );
};

export default AlertBox