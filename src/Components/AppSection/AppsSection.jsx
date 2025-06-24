import React from "react";
import { Link, useLoaderData } from "react-router";
import AppCard from "../AppCard/AppCard";

const AppSection = () => {
  const data = useLoaderData();
  // const [trendingApp, setTrendingApp] = useState([]);
  // const [education, setEducationApp] = useState([]);
  // const [health, setHealthApp] = useState([]);
  // const [productivity, setProductivityApp] = useState([]);

  const trendingApp = data.filter((app) => app.trending === true);
  const educationApp = data.filter((app) => app.category == "education");
  const healthApp = data.filter((app) => app.category == "healthcare");
  const productivityApp = data.filter((app) => app.category == "productivity");

  return (
    <div className="space-y-14 sm:space-y-20 mt-20">
      <div className="bg-[#d5cdff] p-10 rounded-2xl">
        <h3 className="text-4xl font-semibold text-center text-[#5600f5]">
          Trending Apps
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {trendingApp.map((app) => (
            <Link key={app.id} to={`/app-details/${app.id}`}>
              <AppCard app={app}></AppCard>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-[#e9e4ff] p-10 rounded-2xl">
        <h3 className="text-4xl font-semibold text-center text-[#5600f5]">
          Education Apps
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {educationApp.map((app) => (
            <Link key={app.id} to={`/app-details/${app.id}`}>
              <AppCard app={app}></AppCard>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-[#d5cdff] p-10 rounded-2xl">
        <h3 className="text-4xl font-semibold text-center text-[#5600f5]">
          Productivity Apps
        </h3>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10">
          {productivityApp.map((app) => (
            <Link key={app.id} to={`/app-details/${app.id}`}>
              <AppCard app={app}></AppCard>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-[#e9e4ff] p-10 rounded-2xl">
        <h3 className="text-4xl font-semibold text-center text-[#5600f5]">
          Healthcare Apps
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {healthApp.map((app) => (
            <Link key={app.id} to={`/app-details/${app.id}`}>
              <AppCard app={app}></AppCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppSection;
