export default function NewsTicker() {
  return (
    <div className="w-full text-center text-sm text-white py-2 px-2 font-semibold tracking-wide bg-gradient-to-r from-[#1F1B18] via-[#3C2F2F] to-[#A67B5B] overflow-hidden h-10 relative">
      <p className="inline-flex items-center absolute animate-marquee whitespace-nowrap">
        <span>✨</span>
        <span>New Latte Launch - Try our Caramel Delight!</span>
        <span>☕</span>
        <span className="px-2">|</span>
        <span>🔔 10% Discount for Students Every Friday</span>
      </p>
    </div>
  );
}