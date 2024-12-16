import React from 'react';

function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
      {children}
    </h2>
  );
}

export default SectionTitle;