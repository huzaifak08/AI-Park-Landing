import { getImageUrl } from "../../utils";

function Quibly() {
  return (
    <section className="bg-black text-white rounded-2xl py-7 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side – Text */}
        <div className="space-y-6 animate-fadeInLeft">
          <h2 className="text-4xl font-extrabold leading-snug">
            Introducing Quibly
          </h2>
          <p className="text-gray-300 text-lg">
            Quibly is your personalized portal to the most fascinating topics on
            the planet — from cutting-edge AI and tech, to breakthroughs in
            bio-innovation and discoveries shaping our future.
          </p>
          <p className="text-gray-400 text-sm">
            With a unique stack of swipeable, gradient-rich cards, Quibly
            creates a delightful, scroll-free way to explore information. Just
            swipe any direction to move through beautifully designed insights —
            fast, focused, and future-forward.
          </p>
          <p className="text-gray-500 text-xs italic">
            Soon, Quibly will adapt to your interests — so you see what you
            love, first.
          </p>
        </div>

        {/* Right Side – Mockup */}
        <div className="flex justify-center animate-fadeInUp delay-200">
          <img
            src={getImageUrl("quibly-mockup.png")}
            alt="Quibly Mobile Preview"
            className="w-[260px] md:w-[320px] rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Quibly;
