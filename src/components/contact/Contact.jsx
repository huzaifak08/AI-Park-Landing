import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3he2lxa",
        "template_7eukdob",
        form.current,
        "683KpZtgzuYYcmBlF"
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          form.current.reset();
          setTimeout(() => setStatus(""), 5000); // hide after 5 sec
        },
        () => {
          setStatus("Failed to send message. Please try again.");
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  return (
    <section className="bg-black text-white py-16 px-6" id="contact">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Basic Info */}
        <div className="space-y-6 text-left">
          <h2 className="text-3xl font-bold">Contact the Developer</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <span className="font-semibold text-white">Name:</span> Huzaifa
              Khan
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:huzaifa.uno@gmail.com"
                className="hover:underline text-blue-400"
              >
                huzaifa.uno@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Portfolio:</span>{" "}
              <a
                href="https://huzaifa.uno/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                huzaifa.uno
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Contact Form */}
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-semibold">Send a Message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white text-black px-6 py-2 rounded-md font-semibold transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:shadow-xl"
            >
              Send Message
            </button>
            {status && (
              <p className="mt-4 text-sm text-green-400 transition-opacity duration-300">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
