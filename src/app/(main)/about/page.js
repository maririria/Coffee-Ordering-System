'use client';
import Head from 'next/head';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us – Kaif Café</title>
      </Head>

      {/* Video Background Section */}
      <section className="relative h-screen overflow-hidden z-0 flex items-center justify-center">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          preload="auto" 
          className="absolute top-1/2 left-1/2 w-auto h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover z-0"
        >
          <source src="/videos/v2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="relative z-20 text-center animate-fadeInUp px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-xl">ABOUT US</h1>
          <p className="mt-2 text-lg md:text-xl font-light italic">A space for coffee lovers — Kaif Café</p>
        </div>
      </section>

      {/* We Are Kaif */}
      <br></br>
<br></br>
      <section className="py-20 px-6 md:px-20 animate-fadeInUp">
        <div className="grid md:grid-cols-2 gap-12 items-center bg-[#f2e6dd] rounded-2xl p-6 md:p-10">
          <div>
            <br></br>
            <h2 className="text-3xl font-bold mb-4 text-[#4b2e27]">WE ARE KAIF</h2>
            <br></br>
            <p className="text-[#a9746e] italic mb-3">&quot;Brewed with love, served with warmth.&quot;</p>
            <p className="text-sm mb-3 text-[#5c4033]">
              Kaif is more than a café. It&apos;s a haven of comfort, inspiration, and aromatic indulgence. From bean to cup, every detail is crafted with care and community spirit.
            </p>
            <p className="italic text-sm text-[#a9746e]">&quot;The joy is in the aroma of beginnings.&quot;</p>
            <p className="mt-4 font-semibold text-[#4b2e27]">— Helal Kaif</p>
          </div>
          <div>
            <Image 
              src="/images/A3.jpg" 
              alt="Owner" 
              width={500}
              height={500}
              className="rounded-xl shadow-xl w-full max-w-md mx-auto"
              priority
            />
          </div>
        </div>
      </section>
<br></br>
<br></br>
<br></br>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-20 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-[#4b2e27] mb-12">WHY CHOOSE US</h2>
        <br></br>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-[#f8e4d9] p-6 rounded-xl text-center card-hover">
            <h4 className="font-bold text-lg text-[#4b2e27] mb-2">Creative Drinks</h4>
            <p className="text-sm text-[#6d4c41]">Signature blends & cozy comfort cups.</p>
          </div>
          <div className="bg-[#f8e4d9] p-6 rounded-xl text-center card-hover">
            <h4 className="font-bold text-lg text-[#4b2e27] mb-2">Warm Ambiance</h4>
            <p className="text-sm text-[#6d4c41]">An oasis for deep chats and solo sips.</p>
          </div>
          <div className="bg-[#f8e4d9] p-6 rounded-xl text-center card-hover">
            <h4 className="font-bold text-lg text-[#4b2e27] mb-2">Community First</h4>
            <p className="text-sm text-[#6d4c41]">Where every visit feels like coming home.</p>
          </div>
        </div>
      </section>
<br></br>
<br></br>
<br></br>

      {/* Meet Our Team */}
      <section className="py-20 px-6 md:px-20 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-center text-[#4b2e27] mb-12">MEET OUR TEAM</h2>
        <br></br>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div className="bg-[#f2e6dd] p-6 rounded-xl card-hover">
            <Image 
              src="/images/A1.jpg" 
              alt="Team Member" 
              width={128}
              height={128}
              
              className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
            />
            <h4 className="font-semibold text-[#3e2c27]">Hashim Kardar</h4>
            <p className="text-sm text-[#a9746e]">Barista</p>
          </div>
          <div className="bg-[#f2e6dd] p-6 rounded-xl card-hover">
            <Image 
              src="/images/A2.jpg" 
              alt="Team Member" 
              width={128}
              height={128}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
            />
            <h4 className="font-semibold text-[#3e2c27]">Mahir Fareed</h4>
            <p className="text-sm text-[#a9746e]">Co-Founder</p>
          </div>
          <div className="bg-[#f2e6dd] p-6 rounded-xl card-hover">
            <Image 
              src="/images/A4.jpg" 
              alt="Team Member" 
              width={128}
              height={128}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-3"
            />
            <h4 className="font-semibold text-[#3e2c27]">Hayal Khan</h4>
            <p className="text-sm text-[#a9746e]">Manager</p>
          </div>
          <br></br>
<br></br>
<br></br>

        </div>
      </section>
    </>
  );
}