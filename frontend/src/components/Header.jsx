import React from 'react';

const Header = () => {
  return (
    <header className="py-6 mb-8">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <img 
          src="/pokemon-23.svg" 
          alt="Pokemon" 
          className="h-16 md:h-20"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-white ml-4">
          TCG Gallery
        </h1>
      </div>
    </header>
  );
};

export default Header; 