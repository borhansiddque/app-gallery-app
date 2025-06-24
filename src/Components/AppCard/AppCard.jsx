import React from "react";

const AppCard = ({ app }) => {
  const { thumbnail, name, rating, downloads } = app;

  return (
    <div className="bg-white p-5 rounded-2xl space-y-5 shadow-md">
      <div className="flex items-center justify-center">
        <img src={thumbnail} alt="" className="h-30" />
      </div>
      <div className="text-center space-y-5">
        <h3 className="text-2xl md:text-3xl font-semibold text-[#5600f5]">
          {name}
        </h3>
        <div className="flex md:flex-row items-center justify-center gap-5">
          <p className="bg-[#763bff] py-1 px-2 rounded text-[#f2f0ff]">
            Rating - {rating}
          </p>
          <p className="bg-[#763bff] py-1 px-2 rounded text-[#f2f0ff]">
            {downloads} Downloads
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
