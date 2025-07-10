import Link from 'next/link';

export default function Footer() {
  return (
    
    <footer className="bg-[#38231b] text-[#f8e9de] py-12 px-6 md:px-20">
      
      <br></br>
      <br></br>
      <div className="p-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-16 text-sm text-left">
        {/* Column 1: Team & About */}
        <div className="space-y-3">
          <h5 className="text-white text-2xl font-normal font-great-vibes" >Kaif Cafe</h5>
          <br></br>
          <p className="font-raleway">Bringing aroma and creativity to your <br /> daily coffee rituals.</p>
          
          <div className="mt-4 space-y-2">
            <p className="font-medium">Hashim Kardar <span className="block text-[#e8d2c1]">Barista</span></p>
            <p className="font-medium">Mahir Fareed <span className="block text-[#e8d2c1]">Co-Founder</span></p>
            <p className="font-medium">Hayal Khan <span className="block text-[#e8d2c1]">Manager</span></p>
          </div>
        </div>
    
        {/* Column 2: Opening Hours */}
        <div className="space-y-3 mt-4">
          <h5 className="text-white text-xl font-great-vibes">Opening hours</h5>
          <br></br>
          <div className="space-y-1">
            <p>Mon–Fri: 8AM–10PM</p>
            <p>Sat: 9AM–9PM</p>
            <p>Sun: Closed</p>
          </div>
          
          <p className="mt-2 flex items-start"><i className="fas fa-map-marker-alt mr-2 mt-1"></i>123 Coffee Street, Lahore</p>
          <p className="flex items-start"><i className="fas fa-phone mr-2 mt-1"></i>+92 300 1234567</p>
          <p className="flex items-start"><i className="fas fa-envelope mr-2 mt-1"></i>contact@katkafee.com</p>
        </div>
    
        {/* Column 3: Quick Links */}
        <div className="space-y-3">
          <h5 className="text-white text-xl font-great-vibes">Quick links</h5>
          <br></br>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/menu" className="hover:underline">Menu</Link></li>
            <li><Link href="/order" className="hover:underline">Order</Link></li>
            <li><Link href="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
          </ul>
        </div>
      </div>
    <br></br>
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-[#7b5c51] pt-4 text-center text-xs text-[#e8d2c1]">
        &copy; 2025 Karl Café. All Rights Reserved.
      </div>
    </footer>
  );
}