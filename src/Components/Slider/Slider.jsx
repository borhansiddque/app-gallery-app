// AppSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const sliderData = [
  {
    id: 1,
    title: "Pavel Nappe",
    category: "Travel",
    badge: "Just launched!",
    desc: "Explore new destinations with Pavel Nappe – your ultimate travel companion, now officially launched!",
    img: "https://i.ibb.co.com/1GSGZzfh/pavel-travel.jpg",
    rating: 4.7,
    downloads: "10K+",
    tags: ["travel", "navigation", "explore"],
    platforms: ["Android", "iOS"],
    createdAt: "2024-11-10",
  },
  {
    id: 2,
    title: "FitBuddy",
    category: "Healthcare",
    badge: "Best for Health!",
    desc: "Best for Health – FitBuddy helps you stay on track with your fitness goals, diet plans, and daily wellness routines.",
    img: "https://i.ibb.co.com/Dc7qPqG/fitBuddy.png",
    rating: 4.9,
    downloads: "1M+",
    tags: ["Health", "Fitness", "Wellness"],
    platforms: ["Android", "iOS"],
    createdAt: "2020-11-10",
  },
  {
    id: 3,
    title: "Aym Apps",
    category: "Gym",
    badge: "Coming Soon!",
    desc: "Get ready for Aym Apps – the next-generation gym tracker and personal fitness planner, launching soon!",
    img: "https://i.ibb.co.com/5hJZvSnL/aym-apps.jpg",
    downloads: "100K+",
    tags: ["Gym", "Fitness", "Yoga"],
    platforms: ["Android", "iOS"],
  },
];

const Slider = () => {
  return (
    <div className="mx-auto ">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="px-5 sm:px-10 py-10 sm:py-20 bg-[#f2f0ff] rounded-2xl transition-all duration-300 text-center flex flex-col sm:flex-row gap-5 items-center justify-center">
              <div className="sm:w-[50%]">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="mx-auto rounded-xl w-40 sm:w-50 lg:w-70 object-cover"
                />
              </div>
              <div className="space-y-5 sm:w-[50%]">
                <div className="flex gap-2 items-center justify-center">
                  <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#240077]">
                    {slide.title}
                  </h3>
                  <span className="bg-[#5600f5] text-[#f2f0ff] px-2 py-0.5 rounded text-xs">
                    {slide.badge}
                  </span>
                </div>
                <p className="text-[#5600f5] lg:w-[70%] xl:w-[50%] mx-auto">
                  {slide.desc}
                </p>
                {slide.rating ? (
                  <div className="bg-[#5600f5] text-[#f2f0ff] inline-block font-medium px-2 py-0.5 rounded space-y-2">
                    <p className="">Rating - {slide?.rating}</p>
                    <p>Downloads - {slide.downloads}</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
