import React from "react";
import CarCard from "@/app/components/CarCards";
import Link from "next/link";

// Responsive RecommendedCar Component
export const RecommendedCar: React.FC = () => {
  const cars = [
    {
      name: "Koenigsegg",
      type: "sports",
      image: "/koenigsegg.png",
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 90,
      favoriteIcon: "/heart.png",
    },
    {
      name: "Nissan GT - R",
      type: "NissanGTR",
      image: "/Cr-v.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80,
      favoriteIcon: "/heartwhite.png",
    },
    {
      name: "Rolls - Royce",
      type: "Rolls-Royce.png",
      image: "/allnewterios.png",
      fuelCapacity: "70 L",
      transmission: "Automatic",
      capacity: "7 seats",
      price: 150,
      favoriteIcon: "/heart.png",
    },
    {
      name: "MNissan GT - R",
      type: "Sport",
      image: "/NissanGTR.png",
      fuelCapacity: "65 L",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 140,
      favoriteIcon: "/heartwhite.png",
    },
    
  ];

  return (
    <div className="pt-4 bg-gray-100 md:p-8">
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

     
    </div>
  );
};

export default RecommendedCar;
