import React from 'react';
import Header from '@/app/components/Header';  
import Footer from '@/app/components/Footer'; 
import CarCard from '@/app/components/CarCards';


const CategoryPage = () => {
  
  const cars = [
    {
      name: "Tesla Model 3",
      type: "Electric",
      image: "/images/r1.png",
      fuelCapacity: "100 kWh",
      transmission: "Automatic",
      capacity: "5 seats",
      price: 100, 
      favoriteIcon: "/images/heart.png",
    },
    {
      name: "Ford Mustang",
      type: "Gasoline",
      image: "/images/r2.png",
      fuelCapacity: "60 L",
      transmission: "Manual",
      capacity: "4 seats",
      price: 80, 
    },
    {
        name: "Tesla Model 3",
        type: "Electric",
        image: "/images/r1.png",
        fuelCapacity: "100 kWh",
        transmission: "Automatic",
        capacity: "5 seats",
        price: 100, 
        favoriteIcon: "/images/heart.png",
      },
      {
        name: "Tesla Model 3",
        type: "Electric",
        image: "/images/r1.png",
        fuelCapacity: "100 kWh",
        transmission: "Automatic",
        capacity: "5 seats",
        price: 100, 
        favoriteIcon: "/images/heart.png",
      },
      {
        name: "Tesla Model 3",
        type: "Electric",
        image: "/images/r1.png",
        fuelCapacity: "100 kWh",
        transmission: "Automatic",
        capacity: "5 seats",
        price: 100, 
        favoriteIcon: "/images/heart.png",
      },
      {
        name: "Tesla Model 3",
        type: "Electric",
        image: "/images/r1.png",
        fuelCapacity: "100 kWh",
        transmission: "Automatic",
        capacity: "5 seats",
        price: 100,
         favoriteIcon: "/images/heart.png",
      },
      {
        name: "Tesla Model 3",
        type: "Electric",
        image: "/images/r1.png",
        fuelCapacity: "100 kWh",
        transmission: "Automatic",
        capacity: "5 seats",
        price: 100, 
        favoriteIcon: "/images/heart.png",
      },
      {
        name: "Tesla Model 3",
        type: "Electric",
        image: "/images/r1.png",
        fuelCapacity: "100 kWh",
        transmission: "Automatic",
        capacity: "5 seats",
        price: 100, 
        favoriteIcon: "/images/heart.png",
      },
      {
        name: "Tesla Model 3",
        type: "Electric",
        image: "/images/r1.png",
        fuelCapacity: "100 kWh",
        transmission: "Automatic",
        capacity: "5 seats",
        price: 100, 
        favoriteIcon: "/images/heart.png",
      },
      
  ];

  return (
    <><div className="bg-gray-50 min-h-screen">
      
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
                    <input type="checkbox" value="electric" className="mr-2 accent-[#3563E9]" />
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
                    <input type="checkbox" value="hybrid" className="mr-2 accent-[#3563E9]" />
                    <span>Sedan</span>
                    <span className="text-gray-500 ml-2">(20)</span>
                  </label>
                  <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="hybrid" className="mr-2 accent-[#3563E9]" />
                    <span>Coupe</span>
                    <span className="text-gray-500 ml-2">(14)</span>
                  </label>
                  <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="hybrid" className="mr-2 accent-[#3563E9]" />
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
                    <input type="checkbox" value="2Person" className="mr-2 accent-[#3563E9]" />
                    <span>2 Person</span>
                    <span className="text-gray-500 ml-2">(10)</span>
                  </label>
                  <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="4Person" className="mr-2 accent-[#3563E9]" />
                    <span>4 Person</span>
                    <span className="text-gray-500 ml-2">(14)</span>
                  </label>
                  <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="6Person" className="mr-2 accent-[#3563E9]" />
                    <span>6 Person</span>
                    <span className="text-gray-500 ml-2">(16)</span>
                  </label>
                  <label className="flex items-center mt-2 whitespace-nowrap">
                    <input type="checkbox" value="8Person" className="mr-2 accent-[#3563E9]" />
                    <span>8 or more</span>
                    <span className="text-gray-500 ml-2">(16)</span>
                  </label>
                </div>
              </div>



              {/* Category Filter: Price Range */}
              <div className="w-full sm:w-1/3 md:w-1/2 flex-nowrap py-[28px] accent-[#3563E9]">
                <h3 className="text-lg font-medium text-gray-700">Price Range</h3>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  className="w-[220px] mt-2"
                  step="20" />
                <div className="flex justify-between items-center mt-2 text-sm text-gray-600">
                  <span className='text-[20px]'>Max.</span>
                  <span className='text-[20px]'>$100.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking Section */}

        {/* Pick-Up Section */}

        {/* Swap Button */}

        {/* Drop-Off Section */}

        {/* Cars Grid Section */}<div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">Available Cars</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {cars.map((_car, index) => (
              <CarCard
                name="Car Name"
                type="SUV"
                image="car.jpg"
                fuelCapacity="50L"
                transmission="Automatic"
                capacity="5"
                price={30000}
                favoriteIcon="heart-icon"
                key={index} />
            ))}
          </div>
        </div>

        {/* Show More Button */}

      </div>
    </div><div>
        {/* Footer Section */}
        <Footer />
      </div></>
      
  
  );
};

export default CategoryPage;