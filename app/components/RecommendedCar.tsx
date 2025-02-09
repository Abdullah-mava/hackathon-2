import React from "react";
import CarCard from "@/app/components/CarCards";
import Link from "next/link";

// Responsive RecommendedCar Component
export const RecommendedCar: React.FC = () => {
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
  ];

  return (
    <div className="p-4 bg-gray-100 md:p-8">
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
       <Link href="/categorypage" >
        <button className="px-6 py-3 text-base font-medium text-white bg-[#3563E9] rounded-md hover:bg-[#274bc9] transition duration-300 w-full max-w-[200px]">
          Show more cars
        </button>
        </Link>
      </div>
    </div>
  );
};

export default RecommendedCar;
