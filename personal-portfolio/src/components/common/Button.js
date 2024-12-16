// src/components/common/Button.js
import React from 'react';

// Define button variants and sizes
const VARIANTS = {
  primary: 'bg-blue-500 text-white hover:bg-blue-600',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50',
  danger: 'bg-red-500 text-white hover:bg-red-600'
};

const SIZES = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2',
  large: 'px-6 py-3 text-lg'
};

function Button({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  onClick,
  disabled = false,
  type = 'button',
  icon: Icon, 
  ...rest 
}) {
  // Combine base styles with variant and size
  const buttonClasses = `
    flex items-center justify-center 
    rounded-md 
    transition duration-300 
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-blue-500
    ${VARIANTS[variant] || VARIANTS.primary}
    ${SIZES[size] || SIZES.medium}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}
    ${className}
  `;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      {...rest}
    >
      {Icon && (
        <span className={children ? 'mr-2' : ''}>
          <Icon size={20} />
        </span>
      )}
      {children}
    </button>
  );
}

export default Button;