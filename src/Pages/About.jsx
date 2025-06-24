import React from "react";
import { Link } from "react-router";
import useTitle from "../hooks/useTitle/useTitle";

const About = () => {
  useTitle("AppGallery - About Us");
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-gray-800">
      <h1 className="text-4xl font-bold text-center text-[#5600f5] mb-8">
        About Us
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Welcome to <span className="text-[#763bff]">AppGallery</span> – Your
          Gateway to Smart Apps!
        </h2>
        <p className="text-lg leading-relaxed">
          At <strong>AppGallery</strong>, we believe that great apps make life
          easier, smarter, and more fun. Founded in 2020, our mission has been
          simple yet powerful:
        </p>
        <blockquote className="italic text-[#763bff] border-l-4 border-[#763bff] pl-4 mt-4">
          “Find your best app – fast, easy, and reliable.”
        </blockquote>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">📂 Categories We Cover:</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            📚 <strong>Education</strong> – Learn new skills with apps like
            Programming Hero & Math Master
          </li>
          <li>
            📅 <strong>Productivity</strong> – Stay organized with NoteBliss,
            TaskTrack, and more
          </li>
          <li>
            🏥 <strong>Healthcare</strong> – Prioritize your well-being using
            HealthPal, FitBuddy, etc.
          </li>
          <li>
            🔥 <strong>Trending</strong> – Discover what’s popular and what’s
            next in the app world
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">🚀 Why AppGallery?</h3>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Curated apps from trusted developers</li>
          <li>Ratings and download stats to help you decide</li>
          <li>Clean interface and smart navigation</li>
          <li>
            <strong>Coming soon:</strong>{" "}
            <span className="text-[#763bff]">Aym Apps</span> – our very own
            fitness and personal planning app!
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">🤝 Let’s Connect</h3>
        <p className="text-lg leading-relaxed">
          Have feedback or want to collaborate? Reach out via our{" "}
          <Link to="/contact" className="text-[#763bff] underline">
            Contact
          </Link>{" "}
          page or follow us on social platforms.
        </p>
      </section>
    </div>
  );
};

export default About;
