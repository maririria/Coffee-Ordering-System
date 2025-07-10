'use client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function MenuPage() {
  return (

<div>
<section className="menu-bg min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center px-4 text-center relative">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-yellow-400 mb-6 font-[Playfair_Display]">
            We Offer Top Notch
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-3xl leading-relaxed font-[Quicksand]">
            Experience coffee the way it should be
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 w-full max-w-6xl px-4">
            {/* Cappuccino */}
            <div className="w-64 md:w-72 flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <div className="shine-hover rounded-full overflow-hidden w-64 h-64 md:w-72 md:h-72 border-4 border-white">
                <Image 
                  src="/images/Cappucino.jpg" 
                  alt="Cappuccino"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h3 className="text-3xl md:text-4xl mt-4 font-[Playfair_Display] text-white">Cappuccino</h3>
            </div>

            {/* Latte */}
            <div className="w-64 md:w-72 flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <div className="shine-hover rounded-full overflow-hidden w-64 h-64 md:w-72 md:h-72 border-4 border-white">
                <Image 
                  src="/images/latte.jpg" 
                  alt="Latte"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h3 className="text-3xl md:text-4xl mt-4 font-[Playfair_Display] text-white">Latte</h3>
            </div>

            {/* Espresso */}
            <div className="w-64 md:w-72 flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <div className="shine-hover rounded-full overflow-hidden w-64 h-64 md:w-72 md:h-72 border-4 border-white">
                <Image 
                  src="/images/expresso.jpg" 
                  alt="Espresso"
                  width={288}
                  height={288}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <h3 className="text-3xl md:text-4xl mt-4 font-[Playfair_Display] text-white">Espresso</h3>
            </div>
          </div>
          <br></br>
          <Link href="/allmenu">
            <button className="bg-[#3b1f1f] hover:bg-[#5d0d0d] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-colors duration-300">
              View All Menu
            </button>
          </Link>
        </div>
      </section>
</div>
  );
}