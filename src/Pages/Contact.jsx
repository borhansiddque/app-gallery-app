import useTitle from "../hooks/useTitle/useTitle";
const Contact = () => {
  useTitle("AppGallery - Contact Us");
  return (
    <div className="px-6 py-12 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center text-[#5600f5] mb-8">
        Contact Us
      </h1>

      <p className="text-lg mb-6 text-center">
        Have a question, suggestion, or feedback? Fill out the form below and
        we’ll get back to you as soon as possible.
      </p>

      <form className="space-y-6 bg-purple-50 p-8 rounded-xl shadow-md">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b8a6ff]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b8a6ff]"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#b8a6ff]"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#6914ff] hover:bg-[#4c01d6] cursor-pointer text-white font-semibold py-2 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
