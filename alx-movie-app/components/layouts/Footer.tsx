import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <p className="text-center">
            © {new Date().getFullYear()} Movie App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
