import React from 'react';
import { FaTable, FaUser, FaSignInAlt, FaSignOutAlt, FaStar, FaHome, FaCreditCard, FaVrCardboard, FaExchangeAlt } from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard', icon: <FaHome />, active: true },
  { label: 'Tables', icon: <FaTable /> },
  { label: 'Billing', icon: <FaCreditCard /> },
  { label: 'Virtual Reality', icon: <FaVrCardboard /> },
  { label: 'RTL', icon: <FaExchangeAlt /> },
];

const accountItems = [
  { label: 'Profile', icon: <FaUser /> },
  { label: 'Sign In', icon: <FaSignInAlt /> },
  { label: 'Sign Up', icon: <FaSignOutAlt /> },
];

const Sidebar = () => {
  return (
  <div className="sticky top-0 w-full sm:w-[220px] md:w-[250px] bg-white h-screen shadow-lg flex flex-col justify-between py-6 px-2 md:px-4 border-r border-gray-100 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100 z-20">
      <div>
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="bg-gray-200 rounded-lg p-2">
            <FaStar className="text-blue-500 text-2xl" />
          </div>
          <span className="font-bold text-lg text-gray-700">Soft UI Dashboard</span>
        </div>

        <div className="space-y-1 mb-6">
          {navItems.map((item, idx) => (
            <div
              key={item.label}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-gray-600 font-medium transition-all ${item.active ? 'bg-blue-50 text-blue-600 shadow' : 'hover:bg-gray-50'}`}
            >
              <span className={`text-xl ${item.active ? 'bg-blue-500 text-white p-2 rounded-lg' : 'bg-gray-200 text-gray-500 p-2 rounded-lg'}`}>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="text-xs font-bold text-gray-400 mb-2 px-3">ACCOUNT PAGES</div>
          <div className="space-y-1">
            {accountItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer text-gray-600 font-medium hover:bg-gray-50 transition-all"
              >
                <span className="text-xl bg-gray-200 text-gray-500 p-2 rounded-lg">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-gradient-to-br from-blue-400 to-blue-300 rounded-2xl p-4 flex items-center gap-3">
          <FaStar className="text-white text-2xl" />
          <div>
            <div className="text-white font-bold text-sm mb-1">Need help?</div>
            <div className="text-white text-xs">Please check our docs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
