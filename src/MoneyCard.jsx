import React from "react";

function MoneyCard({ title, value, percent, icon }) {
  return (
    <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-6 w-full min-w-[260px] max-w-[350px]">
      <div className="flex flex-col justify-center">
        <div className="text-base font-semibold text-gray-500 mb-1">{title}</div>
        <div className="flex items-end gap-2 mb-1">
          <div className="font-bold text-2xl text-gray-800">{value}</div>
          <div className="text-sm font-bold text-green-500">{percent}</div>
        </div>
      </div>
      <div className="ml-6">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-500 shadow-lg">
          {React.cloneElement(icon, { className: "text-white text-2xl" })}
        </div>
      </div>
    </div>
  );
}

export default MoneyCard;