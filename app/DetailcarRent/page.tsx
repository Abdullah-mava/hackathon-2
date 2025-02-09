import Image from 'next/image';
import Header from "@/app/components/Header";

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-full lg:w-1/5 bg-gray-100 p-4 shadow-md flex flex-col justify-between h-screen">
          {/* Main Menu */}
          <div>
            <h2 className="font-thin font-Plus Jakarta Sans text-lg mb-4">Main Menu</h2>
            <ul className="space-y-2">
              <li>
                <button className="w-full flex text-gray-500 items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800 cursor-pointer">
                  <img src="/home.png" alt="Dashboard Icon" className="w-5 h-5" />
                  <span>Dashboard</span>
                </button>
              </li>
              <li>
                <button className="w-full text-gray-500 flex items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800">
                  <img src="/carsd.png" alt="Car Rent Icon" className="w-5 h-5" />
                  <span>Car Rent</span>
                </button>
              </li>
              <li>
                <button className="w-full text-gray-500 flex items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800 cursor-pointer">
                  <img src="/chart.png" alt="Insight Icon" className="w-5 h-5" />
                  <span>Insight</span>
                </button>
              </li>
              <li>
                <button className="w-full text-gray-500 flex items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800 cursor-pointer">
                  <img src="/empty-wallet-change.png" alt="Reimburse Icon" className="w-5 h-5" />
                  <span>Reimburse</span>
                </button>
              </li>
              <li>
                <button className="w-full text-gray-500 flex items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800 cursor-pointer">
                  <img src="/message.png" alt="Inbox Icon" className="w-5 h-5" />
                  <span>Inbox</span>
                </button>
              </li>
              <li>
                <button className="w-full text-gray-500 flex items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800 cursor-pointer">
                  <img src="/calendar.png" alt="Calendar Icon" className="w-5 h-5" />
                  <span>Calendar</span>
                </button>
              </li>
            </ul>
            <h2 className="mt-6 mb-4 font-thin font-Plus Jakarta Sans text-lg">Preferences</h2>
            <ul className="space-y-2">
              <li>
                <button className="w-full text-gray-500 flex items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800 cursor-pointer">
                  <img src="/setting.png" alt="Settings Icon" className="w-5 h-5" />
                  <span>Settings</span>
                </button>
              </li>
              <li>
                <button className="w-full text-gray-500 flex items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800 cursor-pointer">
                  <img src="/info-circle.png" alt="Help Icon" className="w-5 h-5" />
                  <span>Help & Center</span>
                </button>
              </li>
              <li>
                <button className="w-full text-gray-500 flex items-center space-x-3 text-left p-2 rounded hover:text-white hover:bg-blue-800 cursor-pointer">
                  <img src="/briefcase.png" alt="Dark Mode Icon" className="w-5 h-5" />
                  <span>Dark Mode</span>
                  <img src="/darkandlight.png" alt="Dark Mode Icon" className="w-[68px] h-[34px]" />
                </button>
              </li>
            </ul>
          </div>

          {/* Log Out Section */}
          <div>
            <ul>
              <li>
                <button className="w-full flex items-center space-x-3 text-left p-2 rounded hover:text-red-600 cursor-pointer">
                  <img src="/logout.png" alt="Log Out Icon" className="w-5 h-5" />
                  <span>Log Out</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <main className="w-full lg:w-4/5 p-6 overflow-auto">
          {/* Map and Top 5 Car Rental Section */}
          <h2 className="text-lg font-semibold pt-5">Details Rental</h2>
          <div className="bg-white p-6 shadow rounded-lg flex flex-col lg:flex-row gap-6 mb-6">
            <Image
              src="/Maps.png"
              alt="Map placeholder"
              width={486}
              height={272}
              className="rounded"
            />
            <Image
              src="/top_5_car_renteal.png"
              alt="Top 5 Car Rental"
              width={524}
              height={324}
              className="rounded"
            />
          </div>

          {/* Main Grid Layout */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Larger Section */}
            <div className="col-span-1 lg:col-span-2 bg-white p-6 shadow rounded-lg">
              <div className="flex mb-5">
                <div className="relative w-[116px] h-[36px]">
                  <Image
                    src="/NissanGTRwbg.png"
                    alt="Nissan GT-R"
                    width={150}
                    height={100}
                    className="rounded"
                  />
                </div>

                <div className="ml-6">
                  <h3 className="text-lg font-semibold">Nissan GT-R</h3>
                  <p className="text-gray-500">Sport Car</p>
                </div>
              </div>
              {/* Pick-up and Drop-off Section */}
              <div>
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
            </div>

            {/* Smaller Section */}
            <div className="col-span-1 bg-white p-6 shadow rounded-lg">
              <h2 className="text-lg font-semibold mb-6">Recent Transactions</h2>
              <div className="space-y-4">
                <Image
                  src="/transactionGTR.png"
                  alt="Car 1"
                  width={300}
                  height={100}
                  className="rounded"
                />
                <Image
                  src="/transaction2.png"
                  alt="Car 2"
                  width={300}
                  height={100}
                  className="rounded"
                />
                <Image
                  src="/transaction3.png"
                  alt="Car 3"
                  width={300}
                  height={100}
                  className="rounded"
                />
                <Image
                  src="/transaction4.png"
                  alt="Car 4"
                  width={300}
                  height={100}
                  className="rounded"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
