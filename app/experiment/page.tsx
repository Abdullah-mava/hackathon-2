import React from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CarCard from "@/app/components/CarCards";
import Link from "next/link";


const App = () => {
  const popularCars = [
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
  
  ];

  return (
    <div>
      <div className="flex flex-col overflow-x-hidden">
        {/* Header Section */}
        <Header />

        {/* Main Content */}
        <div className="flex gap-6 p-6">
          {/* Sidebar Section */}
          <aside className="w-1/4 bg-white p-6">
            {/* Category Filter: Car Type */}
            <div className="pb-4 font-semibold">
          <h3 className="text-lg font-medium text-gray-500">Type</h3>
          <div className="mt-2 text-gray-800">
            <label className="flex items-center">
              <input type="checkbox" value="sport" className="mr-2 accent-blue-600" />
              <span>Sport</span>
              <span className="text-gray-500 ml-2">(10)</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" value="suv" className="mr-2 accent-blue-600" />
              <span>SUV</span>
              <span className="text-gray-500 ml-2">(12)</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" value="mpv" className="mr-2 accent-blue-600" />
              <span>MPV</span>
              <span className="text-gray-500 ml-2">(16)</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" value="sedan" className="mr-2 accent-blue-600" />
              <span>Sedan</span>
              <span className="text-gray-500 ml-2">(20)</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" value="coupe" className="mr-2 accent-blue-600" />
              <span>Coupe</span>
              <span className="text-gray-500 ml-2">(14)</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" value="hatchback" className="mr-2 accent-blue-600" />
              <span>Hatchback</span>
              <span className="text-gray-500 ml-2">(14)</span>
            </label>
          </div>
        </div>

            {/* Capacity Filters */}
            <div className="pt-6 font-semibold">
          <h3 className="text-lg font-medium text-gray-500">Capacity</h3>
          <div className="mt-2 text-gray-800">
            <label className="flex items-center">
              <input type="checkbox" value="2Person" className="mr-2 accent-blue-600" />
              <span>2 Person</span>
              <span className="text-gray-500 ml-2">(10)</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" value="4Person" className="mr-2 accent-blue-600" />
              <span>4 Person</span>
              <span className="text-gray-500 ml-2">(14)</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" value="6Person" className="mr-2 accent-blue-600" />
              <span>6 Person</span>
              <span className="text-gray-500 ml-2">(16)</span>
            </label>
            <label className="flex items-center mt-2">
              <input type="checkbox" value="8Person" className="mr-2 accent-blue-600" />
              <span>8 or more</span>
              <span className="text-gray-500 ml-2">(16)</span>
            </label>
          </div>
        </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Car Details Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="car-info bg-[#3563E9] p-6 rounded-lg shadow-md">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                Sports car with the best design and acceleration
                </h2>
                <h1 className=" text-white" >
                Safety and comfort while driving a 
                </h1>
                <h1 className=" text-white">
                futuristic and elegant sports car
                </h1>
                <img
                  src="/image 8.png "
                  alt="Sports Car"
                  className="mt-6 w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold">Nissan GT-R</h2>
                <p className="mt-4">
                NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
                </p>
                <ul className="mt-6 space-y-2">
                  <li><strong>Type:</strong> Sport</li>
                  <li><strong>Steering:</strong> Manual</li>
                  <li><strong>Fuel:</strong> Gasoline</li>
                </ul>
                <div className="price mt-6 flex justify-between rounded-lg">
                  <p className="text-xl">
                    <span className="text-blue-600">$80.00/day</span>
                    <span className="text-gray-500 line-through ml-2">$100.00</span>
                  </p>
                 <Link href="/exp"> 
                    <button  className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500 transition">Rent Now</button>
                 </Link>
                </div>
              </div>
            </section>

            {/* Reviews Section */}
            <section className="reviews mt-12">
             
              <section className="reviews mt-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Reviews (13)</h3>
                {[
                  { 
                    name: "Alex Stanton",
                    title: "CEO at Bukalapak",
                    date: "21 July 2022",
                    rating: 5,
                    review:
                      "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    pfp: "aadmi.png", // Replace with actual PFP URL
                  },
                  {
                    name: "Skylar Dias",
                    title: "CEO at Amazon",
                    date: "20 July 2022",
                    rating: 4,
                    review:
                      "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
                    pfp: "aurat.png", // Replace with actual PFP URL
                  },
                ].map((review, index) => (
                  <div
                    key={index}
                    className="review mt-6 bg-white p-6 rounded-lg shadow-md flex gap-4"
                  >
                    {/* Profile Picture */}
                    <img
                      src={review.pfp}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {/* Review Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-gray-800">
                            {review.name}{" "}
                            <span className="text-sm text-gray-500">({review.title})</span>
                          </p>
                          <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                        </div>
                        {/* Star Ratings */}
                        <div className="flex items-center">
                          {Array.from({ length: 5 }, (_, i) => (
                            <img
                              src="/star.png"
                            />
                          ))}
                        </div>
                      </div>
                      {/* Review Text */}
                      <p className="mt-4 text-gray-700">{review.review}</p>
                    </div>
                  </div>
                ))}
                </section>
              {/* Reviews map */}
            </section>

            {/* REcent Cars Section */}
            <section className="popular-cars mt-12 bg-gray-100 p-6">
              <div className="flex justify-between items-center">
                <h2 className="text-lg text-gray-600 font-semibold">Recent Cars</h2>
                <Link href="/categorypage">
                  <button className="text-blue-600 hover:underline">View All</button>
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {popularCars.map((car, index) => (
                  <CarCard key={index} {...car} />
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
      <div className="pt-5">
        <Footer />
      </div>
    </div>
  );
};

export default App;
