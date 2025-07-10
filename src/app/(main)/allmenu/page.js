'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function AllMenuPage() {
  return (
    <>
      <Head>
        <title>Our Full Menu | Kaif Café</title>
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </Head>

      <div className="text-white">
        {/* Menu Section */}
        <section className="menuall-bg min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center px-4 text-center relative bg-black/70">
          <br></br>
          <br></br>

          <h1 className="text-7xl text-yellow-400 font-bold text-center mb-12" style={{ fontFamily: "'CoffeeTown', serif" }}>
            Our Menu
          </h1>
          <br></br>
<br></br>
<br></br>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-20">
            {menuItems.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="image-wrapper">
                  <Image 
                    src={`/images/${item.image}`} 
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full zoom-hover"
                  />
                  <Link href={`/order?coffee=${encodeURIComponent(item.name)}`} className="order-button">
                    Order Now
                  </Link>
                </div>
                <h3 className="text-4xl text-black mt-4" style={{ fontFamily: "'fontSmall', serif" }}>{item.name}</h3>
                <p className="text-red-700 font-bold text-lg mt-1" style={{ fontFamily: "'fontSmall', serif" }}>${item.price}</p>
              </div>
            ))}
          </div>
          <br></br>
<br></br>
<br></br>

        </section>
      </div>
    </>
  );
}

// Menu items data
const menuItems = [
  { name: 'Cappuccino', price: '3.99', image: 'Cappucino.jpg' },
  { name: 'Latte', price: '4.49', image: 'latte.jpg' },
  { name: 'Espresso', price: '2.99', image: 'expresso.jpg' },
  { name: 'Turkish Coffee', price: '4.99', image: 'turkish coffee.jpg' },
  { name: 'Americano', price: '3.49', image: 'Americano.jpg' },
  { name: 'Iced Coffee', price: '4.25', image: 'iced coffee.jpg' },
  { name: 'Mocha', price: '5.00', image: 'mocha.jpg' },
  { name: 'Flat White', price: '4.00', image: 'flat white.jpg' },
  { name: 'Chai', price: '3.00', image: 'chai.jpg' }
];