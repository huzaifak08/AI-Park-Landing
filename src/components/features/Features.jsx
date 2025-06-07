import { FaCamera, FaMagic, FaFileExport, FaCheckCircle } from "react-icons/fa";
import { FaRobot } from "react-icons/fa";
import Quibly from "./Quibly";
import AuraAI from "./AuraAI";

function Features() {
  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 scroll-mt-24"
      id="features"
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Top Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-2xl p-6 text-left border border-gray-100 transition hover:shadow-lg">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <FaCamera className="text-blue-500 text-2xl sm:text-xl" />
            </div>
            <h3 className="text-xl sm:text-lg text-black font-bold mb-1">
              Capture & Extract
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Take photos or select from gallery to extract text instantly
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-md rounded-2xl p-6 text-left border border-gray-100 transition hover:shadow-lg">
            <div className="bg-purple-100 p-3 rounded-full inline-block mb-4">
              <FaMagic className="text-purple-500 text-2xl sm:text-xl" />
            </div>
            <h3 className="text-xl sm:text-lg text-black font-bold mb-1">
              AI Enhancement
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Enhance and summarize extracted text with advanced AI
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-md rounded-2xl p-6 text-left border border-gray-100 transition hover:shadow-lg">
            <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
              <FaFileExport className="text-green-500 text-2xl sm:text-xl" />
            </div>
            <h3 className="text-xl sm:text-lg text-black font-bold mb-1">
              Easy Export
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Copy to clipboard or share your processed text anywhere
            </p>
          </div>
        </div>

        {/* Aura AI Feature Block */}
        <AuraAI />

        {/* Quibly */}
        <Quibly />

        {/* Bottom Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Trusted by 5,000+ users
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            4.8 Star Rating
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Privacy Focused
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            Regular Updates
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
