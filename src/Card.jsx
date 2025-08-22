import React from 'react';
// Image now served from public folder
import { FaArrowRight } from 'react-icons/fa';


const Card = () => (
  <div className="flex rounded-2xl bg-white shadow-lg p-6 pl-8 gap-4 pr-4 text-[15px] min-h-[220px] items-center">
    <div className="flex flex-col justify-between gap-2 flex-1">
      <div>
        <h3 className="text-gray-400 mb-1 font-semibold">Build by developers</h3>
        <h2 className="text-2xl font-bold text-gray-700
         mb-2">Soft UI Dashboard</h2>
        <p className="text-gray-400 mb-2 font-bold">
          From colors, cards, typography to complex elements, you will find the full documentation.
        </p>
      </div>
      <div className="mt-4 text-gray-700 font-semibold flex items-center gap-2 cursor-pointer hover:text-blue-500">
        Read More <FaArrowRight />
      </div>
    </div>
    <div className="w-[220px] h-[180px] flex items-center justify-center rounded-xl relative overflow-hidden ml-8">
    <img src="/aeroo.jpg" alt="Rocket" className="w-full h-full rounded-xl  object-cover z-10" />
    </div>
  </div>
);

export default Card;
