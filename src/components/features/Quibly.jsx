import { getImageUrl } from "../../utils";

function Quibly() {
  return (
    <section className="bg-black text-white rounded-2xl py-7 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side – Text */}
        <div className="animate-fadeInLeft text-left">
          <h2 className="text-4xl font-extrabold leading-snug mb-6">
            Introducing Quibly
          </h2>

          <p className="text-gray-300 text-lg mb-4">
            Quibly is your smart companion for learning and curiosity. Choose
            your area of interest, and Quibly will instantly generate fresh,
            interactive questions and information tailored just for you:
          </p>

          <ul className="list-disc list-outside text-gray-300 text-base pl-6 mb-4">
            <li>Technology</li>
            <li>General Knowledge</li>
            <li>Maths</li>
            <li>History</li>
            <li>Geography</li>
          </ul>

          <p className="text-gray-400 text-sm mb-4">
            With a delightful stack of swipeable, gradient-rich cards, Quibly
            offers a super engaging, scroll-free way to explore knowledge. Swipe
            in any direction to dive into beautifully designed content — fast,
            focused, and fun.
          </p>

          <p className="text-gray-500 text-xs italic">
            Whether you're a student, someone prepping for interviews, a trivia
            lover, or just naturally curious — Quibly is made for you.
          </p>
        </div>

        {/* Right Side – SVG Mockup */}
        <div className="flex justify-center animate-fadeInUp delay-200">
          <img
            src={getImageUrl("quibly.svg")}
            alt="Quibly Preview"
            className="w-[160px] md:w-[240px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Quibly;
