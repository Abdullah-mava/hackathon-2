import React from 'react';
import Header from '@/app/components/Header';  
import Footer from '@/app/components/Footer'; 
import CarCard from '@/app/components/CarCards';
import { LuArrowDownUp } from "react-icons/lu";
import Link from "next/link";



// Responsive RecommendedCar Component
export const CategoryPage: React.FC = () => {
  const cars = [
    {
      name: "All New Rush",
      type: "suv",
      image: "/AllnewRush.png",
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 100,
      favoriteIcon: "/heartwhite.png",
    },
    {
      name: "Cr-v",
      type: "Suv",
      image: "/Cr-v.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80,
      favoriteIcon: "/heart.png",
    },
    {
      name: "All New Terios",
      type: "Suv",
      image: "/allnewterios.png",
      fuelCapacity: "70 L",
      transmission: "Automatic",
      capacity: "7 seats",
      price: 150,
      favoriteIcon: "/heartwhite.png",
    },
    {
      name: "Cr-v",
      type: "Suv",
      image: "Cr-v.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 120,
      favoriteIcon: "/heart.png",
    },
    {
      name: "MG-ZX",
      type: "Hatch back",
      image: "/MGZX.png",
      fuelCapacity: "65 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 140,
      favoriteIcon: "/heart.png",
    },
    {
      name: "MGZXnew",
      type: "Suv",
      image: "MGZXnew.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 200,
      favoriteIcon: "/heartwhite.png",
    },
    {
      name: "MG-ZX",
      type: "Hatch back",
      image: "/MGZX.png",
      fuelCapacity: "70 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 110,
      favoriteIcon: "/heart.png",
    },
    {
      name: "MGZXnew",
      type: "Suv",
      image: "/MGZXnew.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 90,
      favoriteIcon: "/heartwhite.png",
    },
    {
      name: "All New Rush",
      type: "suv",
      image: "/AllnewRush.png",
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 100,
      favoriteIcon: "/heartwhite.png",
    },
    {
      name: "Cr-v",
      type: "Suv",
      image: "/Cr-v.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80,
      favoriteIcon: "/heart.png",
    },
    {
      name: "All New Terios",
      type: "Suv",
      image: "/allnewterios.png",
      fuelCapacity: "70 L",
      transmission: "Automatic",
      capacity: "7 seats",
      price: 150,
      favoriteIcon: "/heartwhite.png",
    },
    {
      name: "Cr-v",
      type: "Suv",
      image: "Cr-v.png",
      fuelCapacity: "50 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 120,
      favoriteIcon: "/heart.png",
    },
  
  ];

  return (
    <div className="p-4 bg-gray-100 md:p-8">
      <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <Header />
      <div className="flex">
        {/* Category Filters Section */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="gap-6 flex-nowrap">
              {/* Category Filter: Car Type */}
              <div className="w-full sm:w-1/3 md:w-1/2 pb-4 flex-nowrap font-semibold font-Plus Jakarta Sans">
                <h3 className="text-lg font-medium text-gray-500">Type</h3>
                <div className="mt-2 px-1 text-gray-800">
                    <label className="flex items-center whitespace-nowrap">
                    <input type="checkbox" value="electric" className="mr-2 accent-[#3563E9]"  />
                    <span>Sport</span>
                    <span className="text-gray-500 ml-2">(10)</span>
                    </label>
                    <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="gasoline" className="mr-2 accent-[#3563E9]" />
                    <span>SUV</span>
                    <span className="text-gray-500 ml-2">(12)</span>
                    </label>
                    <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="diesel" className="mr-2 accent-[#3563E9]" />
                    <span>MPV</span>
                    <span className="text-gray-500 ml-2">(16)</span>
                    </label>
                    <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="hybrid" className="mr-2 accent-[#3563E9]"  />
                    <span>Sedan</span>
                    <span className="text-gray-500 ml-2">(20)</span>
                    </label>
                    <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="hybrid" className="mr-2 accent-[#3563E9]"  />
                    <span>Coupe</span>
                    <span className="text-gray-500 ml-2">(14)</span>
                    </label>
                    <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="hybrid" className="mr-2 accent-[#3563E9]"  />
                    <span>Hatchback</span>
                    <span className="text-gray-500 ml-2">(14)</span>
                    </label>
                </div>
                </div>
          {/*capacity*/}
            <div className="w-full sm:w-1/3 md:w-1/2 pb-4 flex-nowrap font-semibold font-Plus Jakarta Sans py-[28px]">
                <h3 className="text-lg font-medium text-gray-500">Capacity</h3>
                <div className="mt-2 px-1 text-gray-800">
                    <label className="flex items-center whitespace-nowrap">
                    <input type="checkbox" value="2Person" className="mr-2 accent-[#3563E9]"  />
                    <span>2 Person</span>
                    <span className="text-gray-500 ml-2">(10)</span>
                    </label>
                    <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="4Person" className="mr-2 accent-[#3563E9]"  />
                    <span>4 Person</span>
                    <span className="text-gray-500 ml-2">(14)</span>
                    </label>
                    <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="6Person" className="mr-2 accent-[#3563E9]"  />
                    <span>6 Person</span>
                    <span className="text-gray-500 ml-2">(16)</span>
                    </label>
                    <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="8Person" className="mr-2 accent-[#3563E9]"  />
                    <span>8 or more</span>
                    <span className="text-gray-500 ml-2">(16)</span>
                    </label>
                </div>
                </div>



              {/* Category Filter: Price Range */}
              <div className="w-full sm:w-1/3 md:w-1/2 flex-nowrap py-[28px] accent-[#3563E9]" >
                <h3 className="text-lg font-medium text-gray-700">Price Range</h3>
                <input
                    type="range"
                    min="0"
                    max="1000"
                    className="w-[220px] mt-2"
                    step="20"
                />
                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                    <span className='text-[20px]'>Max.</span>
                    <span className='text-[20px]'>$100.00</span>
                </div>
                </div>
            </div>
          </div>
        </div>
            {/* Booking Section */}
           <div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4 bg-white p-6 rounded-lg shadow-md">
          {/* Pick-Up Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Pick-Up</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>

          {/* Swap Button */}
          <div>
            <button className="bg-blue-500 text-white p-4 rounded-full shadow-md hover:bg-blue-600">
              <LuArrowDownUp />
            </button>
          </div>

          {/* Drop-Off Section */}
          <div className="flex-1">
            <h3 className="text-lg font-medium mb-2">Drop-Off</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm mb-1">Locations</label>
                <select className="w-full border rounded-md p-2">
                  <option>Select your city</option>
                </select>
              </div>
              <div>
                <label className="block text-sm mb-1">Date</label>
                <input type="date" className="w-full border rounded-md p-2" />
              </div>
              <div>
                <label className="block text-sm mb-1">Time</label>
                <input type="time" className="w-full border rounded-md p-2" />
              </div>
            </div>
          </div>
        </div>


      {/* Section Header */}
      <h2 className="text-lg font-semibold text-slate-900 text-left mb-6 md:text-xl">
        Recommended Car
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car, index) => (
          <CarCard key={index} {...car} />
        ))}
      </div>
     
      {/* Show More Button */}
      <div className="flex justify-center mt-12">
       <Link href="/experiment" >
        <button className=" mb-10 px-6 py-3 text-base font-medium text-white bg-[#3563E9] rounded-md hover:bg-[#274bc9] transition duration-300 w-full max-w-[200px]">
          Show more cars
        </button>
        </Link>
      </div>
      <div>
      {/* Footer Section */}
      <Footer />
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default CategoryPage;






