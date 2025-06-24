import React from "react";

const Announcements = () => {
  const events = [
    {
      title: "🚀 Upcoming Hackathon: CodeSprint 2025(Sponsors by PH)",
      date: "June 10–12, 2025",
      description: "Theme: Build apps that make life easier",
      link: "#",
      linkText: "Register Now",
      extra: "🏆 Prizes worth $10,000+",
    },
    {
      title: "🎉 Contest: UI Design Challenge",
      date: "Submission Deadline: May 30, 2025",
      description: "Design a mobile app UI and win exciting rewards!",
      link: "#",
      linkText: "Submit Your Design",
    },
    {
      title: "📢 Platform Update: Version 3.5 Released",
      date: "Released: May 1, 2025",
      description:
        "We’ve rolled out faster search, better app categorization, and a dark mode!",
      link: "#",
      linkText: "Read Full Changelog",
    },
    {
      title: "🎤 Live Webinar: “How to Monetize Your App”",
      date: "May 15, 2025 | Time: 7 PM GMT",
      description: "Speaker: Amanda Roy (Product Lead, AppX)",
      link: "#",
      linkText: "Join Webinar",
    },
  ];

  return (
    <section className="bg-[#d5cdff] py-12 px-6 md:px-12 mt-20 rounded-2xl">
      <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#5600f5] mb-10">
        📣 Announcements & Events
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 border border-[#d5cdff]"
          >
            <h3
              className="text-xl font-semibold text-[#5600f5]"
            >
              {event.title}
            </h3>
            <p className="text-sm text-gray-500 mb-1">{event.date}</p>
            <p className="text-gray-700 mb-2">{event.description}</p>
            {event.extra && (
              <p className="text-sm font-medium text-green-700">
                {event.extra}
              </p>
            )}
            <a
              href={event.link}
              className="inline-block mt-3 text-sm text-white hover:bg-[#4c01d6] bg-[#6914ff] px-4 py-2 rounded-lg transition"
            >
              {event.linkText}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Announcements;
