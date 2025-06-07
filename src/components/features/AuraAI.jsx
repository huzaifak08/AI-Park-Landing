import { getImageUrl } from "../../utils";

function AuraAI() {
  return (
    <section className="bg-gradient-to-br from-zinc-900 to-black text-white rounded-2xl py-20 px-6 my-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Side – Description */}
        <div className="space-y-6 animate-fadeInLeft">
          <h2 className="text-4xl font-extrabold leading-snug">Meet Aura AI</h2>
          <p className="text-gray-300 text-lg">
            Aura AI is your smart, intuitive AI assistant — always available
            inside AI Park to answer, explain, and explore your curiosity.
          </p>
          <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
            <li>Simple, natural chat interface designed for clarity</li>
            <li>Dark & white bubble layout with smooth message flow</li>
            <li>Instant, context-aware replies powered by AI</li>
            <li>Swipe up to revisit your conversation history</li>
            <li>Send prompts with a single tap</li>
          </ul>
          <p className="text-gray-500 text-xs italic">
            Built with user focus, minimalism, and accessibility at its core.
          </p>
        </div>

        {/* Right Side – Mobile Mockup */}
        <div className="flex justify-center animate-fadeInUp delay-200">
          <img
            src={getImageUrl("aura-mockup.svg")}
            alt="Aura AI Mobile Preview"
            className="w-[260px] md:w-[320px] rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AuraAI;
