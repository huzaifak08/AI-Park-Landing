function Contact() {
  return (
    <section className="bg-black text-white py-16 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Developer Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Contact the Developer</h2>
          <p className="text-gray-400">
            I'm always excited to collaborate on new projects, ideas, or
            challenges. Feel free to reach out through any of the platforms
            below!
          </p>

          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <span className="font-semibold text-white">Name:</span> Huzaifa
              Khan
            </li>
            <li>
              <span className="font-semibold text-white">Role:</span> Full Stack
              Mobile Engineer
            </li>
            <li>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:huzaifa.uno@gmail.com"
                className="hover:underline"
              >
                huzaifa.uno@gmail.com
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">Website:</span>{" "}
              <a
                href="https://huzaifa.uno/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                huzaifa.uno
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/huzaifak08/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                huzaifak08
              </a>
            </li>
            <li>
              <span className="font-semibold text-white">GitHub:</span>{" "}
              <a
                href="https://github.com/huzaifak08"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-400"
              >
                huzaifak08
              </a>
            </li>
          </ul>
        </div>

        {/* Right: Optional Message or Form */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold">Let’s Connect</h3>
          <p className="text-gray-400">
            Whether you're looking for a website, mobile apps for Android or IOS
            — let’s build something amazing together.
          </p>
          <a
            href="mailto:huzaifa.uno@gmail.com"
            className="inline-block bg-white !text-black px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
