import React from 'react'
import Navbar from './Navbar'
import MoneyCard from './MoneyCard'
import { FaDollarSign, FaMoneyBillWave, FaChartLine, FaHome, FaArrowRight } from 'react-icons/fa'
import Card from './Card'

const Dashboard = () => {
  const summaryCards = [
    { title: "Today's Money", value: "$53,000", percent: "+55%", icon: <FaDollarSign className="text-white
       bg-blue-400 rounded-full p-2 text-2xl" /> },
    { title: "Today's Users", value: "2,300", percent: "+3%", icon: <FaMoneyBillWave className="text-white bg-blue-400 rounded-full p-2 text-2xl" /> },
    { title: "New Clients", value: "+3,462", percent: "-2%", icon: <FaChartLine className="text-white bg-blue-400 rounded-full p-2 text-2xl" /> },
    { title: "Sales", value: "$103,430", percent: "+5%", icon: <FaDollarSign className="text-white bg-blue-400 rounded-full p-2 text-2xl" /> },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="px-8 pt-4">

        <div className="grid grid-cols-4 gap-6 mb-6">
          {summaryCards.map((data, index) => (
            <MoneyCard key={index} {...data} />
          ))}
        </div>

        <div className="grid grid-cols-5 gap-6 mb-6 items-stretch">
          <div className="h-full col-span-3 min-h-[220px]">
              <Card />
          </div>
          <div className="relative rounded-2xl col-span-2 p-0 shadow-lg 
          flex flex-col justify-between h-full min-h-[220px] overflow-hidden">
            <img src="src/assets/bgimage.jpg" alt="Rocket" className="absolute inset-0 w-full
             h-full object-cover opacity-60" />
            <div className="absolute inset-0
             bg-gradient-to-br from-blue-900 to-blue-700 opacity-80"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
              <h2 className="text-white text-xl
               font-bold mb-2">Work with the rockets</h2>
              <p className="text-white mb-4">Wealth creation is an evolutionarily recent positive-sum game.<br/>It is all about who takes the opportunity first.</p>
              <div className="text-white font-semibold flex 
              items-center gap-2 cursor-pointer hover:text-blue-300">
                Read More <FaArrowRight />
              </div>
            </div>
          </div>
        </div>

                    
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl  shadow-lg flex items-center
           justify-center min-h-[220px]">
            <img src="src/assets/bargraph.jpg"  
            className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg min-h-[220px]">
            <h2 className="text-lg font-semibold
             text-gray-700 mb-2">Sales Overview</h2>
            <div className="text-green-500 text-sm font-semibold mb-2">↑ 4% more in 2021</div>
            <img src="src/assets/sales.png" alt="Sales" className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
