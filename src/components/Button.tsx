import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ isActive, onClick }) => {
  return (
    <motion.button
      className={`w-full h-full rounded-lg ${
        isActive
          ? 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
          : 'bg-gray-700 bg-opacity-50'
      } backdrop-blur-md shadow-lg`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={isActive ? { opacity: [0.5, 1, 0.5] } : { opacity: 1 }}
      transition={isActive ? { repeat: Infinity, duration: 1 } : {}}
      onClick={onClick}
    />
  );
};

export default Button;