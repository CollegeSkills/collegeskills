import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md">
      <h1 className="text-xl font-semibold font-oswald text-brand">College <span className='text-brand-primary'>Skills</span> </h1>
      <span className="font-medium text-gray-700">Welcome, College Skills</span>
    </div>
  );
};

export default Navbar;
