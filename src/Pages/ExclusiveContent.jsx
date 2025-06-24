import React from "react";
import useTitle from "../hooks/useTitle/useTitle";

const ExclusiveContent = () => {
  useTitle("AppGallery - Exclusive Content");
  return (
    <div className="p-8 max-w-3xl mx-auto mt-10 bg-[#f7f5ff] border border-[#7e5bef] rounded-lg shadow">
      <h1 className="text-3xl font-bold text-[#5c1dff] mb-4">
        Exclusive Content
      </h1>
      <p className="text-gray-700 text-lg">
        This page is only visible to logged-in users. Here you can include
        premium guides, downloadable resources, member-only announcements, or
        anything else that shouldn't be shown to guests.
      </p>
    </div>
  );
};

export default ExclusiveContent;
