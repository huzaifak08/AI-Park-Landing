import { getImageUrl } from "../../utils";

function Hero() {
  return (
    <section className="w-full text-white px-15 py-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-16">
        {/* Left Side */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="bg-white text-black text-xs font-semibold px-3 py-1 rounded-full uppercase">
              New
            </span>
            <span className="text-sm tracking-wider uppercase">
              AI-powered text extraction & enhancement
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight space-y-1">
            <div>Transform</div>
            <div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                images to text
              </span>
            </div>
            <div>with AI magic</div>
          </h1>

          <p className="text-gray-300 max-w-xl">
            Extract text from images instantly and enhance it with powerful AI.
            Transform your documents with intelligent text processing that saves
            time and boosts productivity.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.huzaifa.ai_park"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white !text-black px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
            >
              Download for Android
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center w-full">
          <img
            src={getImageUrl("logo-white-sm.svg")}
            alt="Hero Logo"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain rounded-4xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
