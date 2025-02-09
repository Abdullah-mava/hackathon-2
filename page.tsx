import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <Header />

      <div className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-6 mx-auto">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <div className="lg:col-span-2">
            {/* Billing Info Section */}
            <div className="mb-8 pt-8 pb-10">
              <h2 className="text-2xl font-semibold mb-4">Billing Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" placeholder="Enter your name" className="w-full border rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Town/City</label>
                  <input type="text" placeholder="Enter your town or city" className="w-full border rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input type="text" placeholder="Enter your address" className="w-full border rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input type="text" placeholder="Enter your phone number" className="w-full border rounded-lg p-2" />
                </div>
              </div>
            </div>

            {/* Rental Info Section */}
            <div className="mb-8 pb-10">
              <h2 className="text-2xl font-semibold mb-4">Rental Info</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pick-Up Location</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pick-Up Date</label>
                  <input type="date" className="w-full border rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pick-Up Time</label>
                  <input type="time" className="w-full border rounded-lg p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Drop-Off Location</label>
                  <select className="w-full border rounded-lg p-2">
                    <option>Select your city</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Drop-Off Date</label>
                  <input type="date" className="w-full border rounded-lg p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Drop-Off Time</label>
                  <input type="time" className="w-full border rounded-lg p-2" />
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="mb-8 pb-10">
              <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
              <div className="flex flex-col space-y-4">
                {/* Credit Card */}
                <div>
                  <label className="inline-flex items-center mb-2">
                    <img src="/credit-card-logo.png" alt="Credit Card Logo" className="w-8 h-8 mr-2" />
                    <input type="radio" name="payment" className="mr-2" />
                    Credit Card
                  </label>
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Card Number" className="w-full border rounded-lg p-2" />
                    <input type="text" placeholder="Expiration Date (MM/YY)" className="w-full border rounded-lg p-2" />
                    <input type="text" placeholder="Card Holder" className="w-full border rounded-lg p-2" />
                    <input type="text" placeholder="CVC" className="w-full border rounded-lg p-2" />
                  </div>
                </div>

                {/* PayPal */}
                <label className="inline-flex items-center">
                  <img src="/paypal-logo.png" alt="PayPal Logo" className="w-8 h-8 mr-2" />
                  <input type="radio" name="payment" className="mr-2" />
                  PayPal
                </label>

                {/* Bitcoin */}
                <label className="inline-flex items-center">
                  <img src="/bitcoin-logo.png" alt="Bitcoin Logo" className="w-8 h-8 mr-2" />
                  <input type="radio" name="payment" className="mr-2" />
                  Bitcoin
                </label>
              </div>
            </div>

            {/* Confirmation Section */}
            <div className="mb-8 pb-2">
              <h2 className="text-2xl font-semibold mb-4">Confirmation</h2>
              <div className="space-y-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />
                  I agree with sending me marketing and newsletter emails.
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="mr-2" />
                  I agree with the terms and conditions and privacy policy.
                </label>
              </div>
            </div>

            {/* Rent Now Button */}
            <button className="w-auto mt-6 bg-blue-500 text-white px-4 py-3 rounded-lg">
              Rent Now
            </button>

            {/* Image Below Rent Now Button */}
            <div className="mt-4">
              <img src="/rent-now-banner.jpg" alt="Promotional Banner" className="w-full rounded-lg" />
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-50 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Rental Summary</h2>
            <p className="text-sm text-gray-600 mb-4">
              Prices may change depending on the length of the rental and the price of your rental car.
            </p>

            <div className="flex items-center mb-4">
              <img src="/car-image-placeholder.jpg" alt="Car" className="w-24 h-16 rounded-lg object-cover" />
              <div className="ml-4">
                <h3 className="font-semibold text-lg">Nissan GT - R</h3>
                <p className="text-yellow-500 text-sm flex items-center">
                  ★★★★★ <span className="ml-2 text-gray-600">440+ Reviews</span>
                </p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-sm mb-2">
                <p>Subtotal</p>
                <p>$80.00</p>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <p>Tax</p>
                <p>$0</p>
              </div>
              <div className="flex items-center space-x-2">
                <input type="text" placeholder="Apply promo code" className="border rounded-lg p-2 w-full" />
                <button className="bg-blue-500 text-white px-6 py-2 rounded-lg whitespace-nowrap">
                  Apply now
                </button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-700">Total Rental Price</p>
                <p className="text-2xl font-bold">$80.00</p>
              </div>
              <p className="text-sm text-gray-500">
                Overall price and includes rental discount.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}