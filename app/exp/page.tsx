import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from "next/link";


export default function RentalPage() {
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <Header />

            <div className="container mx-auto py-10 px-6 flex flex-col lg:flex-row lg:space-x-6">
                {/* Left Content */}
                <div className="lg:w-3/4 space-y-6">
                    {/* Billing Info Section */}
                    <section id="billing-info" className="bg-white p-6 shadow rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Billing Info</h2>
                        <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Phone number"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Address"
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">Town / City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                    placeholder="Town or city"
                                />
                            </div>
                        </form>
                    </section>

                    {/* Rental Info Section */}
                    <section id="rental-info" className="bg-white p-6 shadow rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Rental Info</h2>
                        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div>
                                <h3 className="text-md font-medium">Pick-Up</h3>
                                <label
                                    htmlFor="pickup-location"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Locations
                                </label>
                                <select
                                    id="pickup-location"
                                    name="pickup-location"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select your city</option>
                                </select>
                                <label htmlFor="pickup-date" className="block text-sm font-medium text-gray-700 mt-4">Date</label>
                                <input
                                    type="date"
                                    id="pickup-date"
                                    name="pickup-date"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <label htmlFor="pickup-time" className="block text-sm font-medium text-gray-700 mt-4">Time</label>
                                <input
                                    type="time"
                                    id="pickup-time"
                                    name="pickup-time"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            <div>
                                <h3 className="text-md font-medium">Drop-Off</h3>
                                <label
                                    htmlFor="dropoff-location"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Locations
                                </label>
                                <select
                                    id="dropoff-location"
                                    name="dropoff-location"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                >
                                    <option value="">Select your city</option>
                                </select>
                                <label htmlFor="dropoff-date" className="block text-sm font-medium text-gray-700 mt-4">Date</label>
                                <input
                                    type="date"
                                    id="dropoff-date"
                                    name="dropoff-date"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                                <label htmlFor="dropoff-time" className="block text-sm font-medium text-gray-700 mt-4">Time</label>
                                <input
                                    type="time"
                                    id="dropoff-time"
                                    name="dropoff-time"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </form>
                    </section>

                    {/* Payment Method Section */}
                    <section id="payment-method" className="bg-white p-6 shadow rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Payment Method</h2>
                        <form className="space-y-6">
                            <div> 
                                <div className='flex justify-end'><img src="/visa.png" alt="Credit Card Logo" className=" inline-block w-[92px] h-[20-px] mr-2" /></div>
                                <label className="block text-sm font-medium text-gray-700">
                                    <input type="radio" name="payment-method" value="credit-card" defaultChecked className="mr-2 " />
                                    Credit Card
                                </label>
                                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">Card Number</label>
                                        <input type="text" id="card-number" name="card-number" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Card number" />
                                    </div>

                                    <div>
                                        <label htmlFor="expiration-date" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                                        <input type="text" id="expiration-date" name="expiration-date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="MM/YY" />
                                    </div>

                                    <div>
                                        <label htmlFor="card-holder" className="block text-sm font-medium text-gray-700">Card Holder</label>
                                        <input type="text" id="card-holder" name="card-holder" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="Cardholder name" />
                                    </div>

                                    <div>
                                        <label htmlFor="cvc" className="block text-sm font-medium text-gray-700">CVC</label>
                                        <input type="text" id="cvc" name="cvc" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" placeholder="CVC" />
                                    </div>
                                </div>
                            </div>

                            <div> 
                                <div className='flex justify-end'><img src="/PayPal.png" alt="Credit Card Logo" className=" inline-block w-[92px] h-[20-px] mr-2" /></div>
                                <label className="block text-sm font-medium text-gray-700">
                                    <input type="radio" name="payment-method" value="paypal" className="mr-2" />
                                    PayPal
                                </label>
                            </div>

                            <div>
                                <div className='flex justify-end'>
                                    <img
                                     src="/Bitcoin.png"
                                      alt="Credit Card Logo" 
                                      className=" inline-block w-[92px] h-[20-px] mr-2" />
                                      </div>
                                <label className="block text-sm font-medium text-gray-700">
                                    <input type="radio" name="payment-method" value="bitcoin" className="mr-2" />
                                    Bitcoin
                                </label>
                            </div>
                        </form>
                    </section>

                    {/* Confirmation Section */}
                    <section id="confirmation" className="bg-white p-6 shadow rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Confirmation</h2>
                        <form>
                            <div className="mb-4">
                                <label className="flex items-center">
                                    <input type="checkbox" name="terms" value="agree" required className="mr-2 peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-sm checked:border-blue-600 checked:bg-blue-600 checked:ring-2 checked:ring-blue-500 focus:ring-2 focus:ring-blue-500" />
                                    <span className="peer-checked:text-blue-600">I agree with sending Marketing and newsletter emails. No spam, promised!</span>
                                </label>
                            </div>

                            <div className="mb-4">
                                <label className="flex items-center">
                                    <input type="checkbox" name="terms" value="agree" required className="mr-2 peer appearance-none h-5 w-5 border-2 border-gray-300 rounded-sm checked:border-blue-600 checked:bg-blue-600 checked:ring-2 checked:ring-blue-500 focus:ring-2 focus:ring-blue-500" />
                                    <span className="peer-checked:text-blue-600">I agree with your terms and conditions and privacy policy.</span>
                                </label>
                            </div>
                            <Link href='/DetailcarRent'>
                            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Rent Now</button>
                            </Link>
                            <img src="/Safe Data.png" alt="Confirmation Banner" className="w-[548px] h-[100px] mt-4 rounded-md" />
                        </form>
                    </section>
                </div>

                {/* Right Content */}
                <div className="lg:w-1/4">
                    <section id="rental-summary" className="bg-white p-6 shadow rounded-lg">
                        <h2 className="text-lg font-bold mb-4">Rental Summary</h2>
                        <div className="space-y-2">
                            <img
                                src="/NissanGTRwbg.png"
                                alt="Nissan GT - R"
                                className="w-[134px] h-[108px] rounded-md mb-4"
                            />
                            <div><p className="text-gray-700"><strong>Nissan GT - R</strong></p>
                            <p className="text-gray-700">Subtotal:</p>
                            <p> $80.00</p></div>
                            <div>
                            <p className="text-gray-700">Tax: </p>
                            <p>$0.00</p>
                            </div>
                            <div>
                            <p className="text-lg font-bold">Total Rental Price:</p>
                            <p> $80.00</p>
                            </div>
                           <div className='flex whitespace-nowrap'>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-indigo-500"
                                    placeholder="Apply promo code"
                                />
                                <Link href='/DetailcarRent'>
                                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-blue-700">Apply now</button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
