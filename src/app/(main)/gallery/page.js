'use client';
import React from 'react';

const GalleryPage = () => {
  return (
    <main className="container mx-auto px-4 py-12 bg-[#f5efe6]">
      <br></br><br></br>

      <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">
        Our Signature Drinks
      </h2>
<br></br>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Coffee Item 1 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/images/G1.jpeg" alt="Espresso" className="w-full h-64 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-amber-900">Classic Espresso</h3>
              <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                Hot
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Rich, concentrated coffee with a golden crema
            </p>
          </div>
        </div>

        {/* Coffee Item 2 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/images/G2.jpeg" alt="Cappuccino" className="w-full h-64 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-amber-900">Velvet Cappuccino</h3>
              <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                Hot
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Perfect balance of espresso, steamed milk and foam
            </p>
          </div>
        </div>

        {/* Coffee Item 3 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/images/G3.jpeg" alt="Iced Coffee" className="w-full h-64 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-amber-900">Iced Caramel Latte</h3>
              <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                Iced
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Chilled espresso with milk and caramel syrup over ice
            </p>
          </div>
        </div>

        {/* Coffee Item 4 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/images/G4.jpeg" alt="Cold Brew" className="w-full h-64 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-amber-900">Nitro Cold Brew</h3>
              <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                Cold
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Smooth cold brew infused with nitrogen for a creamy texture
            </p>
          </div>
        </div>

        {/* Coffee Item 5 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/images/G5.jpeg" alt="Mocha" className="w-full h-64 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-amber-900">Chocolate Mocha</h3>
              <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-semibold">
                Hot
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Espresso with steamed milk and rich chocolate
            </p>
          </div>
        </div>

        {/* Coffee Item 6 */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <img src="/images/G6.jpeg" alt="Matcha Latte" className="w-full h-64 object-cover" />
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-amber-900">Matcha Green Latte</h3>
              <span className="bg-green-100 text-green-900 px-3 py-1 rounded-full text-sm font-semibold">
                Healthy
              </span>
            </div>
            <p className="text-gray-600 mt-2">
              Ceremonial grade matcha with steamed milk
            </p>
          </div>
        </div>
      </div>
<br></br>
<br></br>

      {/* Gallery Section */}
      <section className="gallery mt-20 px-5 text-center bg-[#fff7ed] py-10">
        <h2 className="gallery-title text-2xl mb-10 text-[#7c3e0a]">Inside Our Café</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <img src="/images/G1.1.jpg" alt="Restaurant Manager and Staff" className="rounded-xl h-[220px] w-full object-cover hover:scale-105 transition" />
          <img src="/images/g1.2.jpg" alt="Barista at Work" className="rounded-xl h-[220px] w-full object-cover hover:scale-105 transition" />
          <img src="/images/G1.6.jpg" alt="Cozy Outdoor Café" className="rounded-xl h-[220px] w-full object-cover hover:scale-105 transition" />
          <img src="/images/G1.8.jpg" alt="Café Decor" className="rounded-xl h-[220px] w-full object-cover hover:scale-105 transition" />
          <img src="/images/G1.3.jpg" alt="Outdoor Coffee Seating" className="rounded-xl h-[220px] w-full object-cover hover:scale-105 transition" />
          <img src="/images/G1.7.jpg" alt="Cozy Outdoor Café" className="rounded-xl h-[220px] w-full object-cover hover:scale-105 transition" />
          <img src="/images/G1.4.jpg" alt="Cozy Outdoor Café" className="rounded-xl h-[220px] w-full object-cover hover:scale-105 transition" />
          <img src="/images/G1.5.jpg" alt="Cozy Outdoor Café" className="rounded-xl h-[220px] w-full object-cover hover:scale-105 transition" />
        </div>
      </section>
<br></br>
<br></br>

      {/* Video Section */}
      <section className="w-full py-12">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-8">
            Live Café Ambience
          </h2>
          <div className="w-full aspect-video">
            <video controls className="w-full h-full object-cover rounded-lg shadow-xl bg-black">
              <source src="/videos/ambience.mp4" type="video/mp4" />
            </video>
          </div>
          <br></br>
<br></br>
<br></br>

        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
<br></br>
