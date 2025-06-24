import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import ReviewForm from "../Components/ReviewForm/ReviewForm";
import useTitle from "../hooks/useTitle/useTitle";
import toast from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleApp = data.find((app) => app.id == id);
  useTitle(`${singleApp.name} App - AppGallery`);

  const {
    thumbnail,
    banner,
    description,
    name,
    developer,
    downloads,
    rating,
    category,
    features,
  } = singleApp;

  const [installed, setInstalled] = useState(false);
  const [canReview, setCanReview] = useState(false);
  const [reviews, setReviews] = useState(singleApp.review || []);

  const addReview = (newReview) => {
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  useEffect(() => {
    const reviewEligibleApps =
      JSON.parse(localStorage.getItem("reviewEligibleApps")) || [];

    const hasInstalledBefore = reviewEligibleApps.includes(id);
    setCanReview(hasInstalledBefore);
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const isCurrentlyInstalled = installedApps.includes(id);
    setInstalled(isCurrentlyInstalled);
  }, [id]);

  const handleInstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const reviewEligibleApps =
      JSON.parse(localStorage.getItem("reviewEligibleApps")) || [];

    if (!installedApps.includes(id)) {
      installedApps.push(id);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
    if (!reviewEligibleApps.includes(id)) {
      reviewEligibleApps.push(id);
      localStorage.setItem(
        "reviewEligibleApps",
        JSON.stringify(reviewEligibleApps)
      );
    }
    setInstalled(true);
    setCanReview(true);
    toast.success("App Installed");
  };

  const handleUninstall = () => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    const updatedApps = installedApps.filter((appId) => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.error("App Uninstalled! But you can still leave a review.");
    setInstalled(false);
  };

  return (
    <>
      <div className="p-8 rounded-2xl bg-[#f2f0ff] md:w-11/12 lg:w-10/12 mx-auto my-14">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div className="flex gap-4 items-center">
            <img src={thumbnail} alt="" className="w-16 h-16 rounded-full" />
            <div className="">
              <h3 className="text-2xl font-semibold">{name}</h3>
              <p className="text-sm text-[#4c01d6]">Develop by - {developer}</p>
            </div>
          </div>
          <div className="">
            {!installed ? (
              <button
                onClick={handleInstall}
                className="hover:bg-[#6914ff] cursor-pointer py-2 px-5 sm:py-3 sm:px-8 text-lg font-medium rounded bg-[#4c01d6] text-white transition"
              >
                Install
              </button>
            ) : (
              <button
                onClick={handleUninstall}
                className="hover:bg-red-600 cursor-pointer py-2 px-5 sm:py-3 sm:px-8 text-lg font-medium rounded bg-red-500 text-white transition"
              >
                Uninstall
              </button>
            )}
          </div>
        </div>
        <img
          src={banner}
          alt=""
          className="h-[300px] sm:h-[500px] w-full rounded-2xl object-cover"
        />
        <div className="">
          <div className="p-5 rounded text-[#fff] bg-[#763bff] inline-block my-5 space-y-4">
            <p>Category - {category?.toUpperCase()}</p>
            <div className="flex flex-col md:flex-row gap-3">
              <h4>Features -</h4>
              <div className="flex flex-wrap gap-x-6 bg-[#f2f0ff] text-[#763bff] px-2 rounded">
                {features.map((feature, i) => (
                  <p key={i}>{feature}</p>
                ))}
              </div>
            </div>
            <p>Downloads - {downloads} </p>
            <p>Rating - {rating}/5 </p>
          </div>
          <p className="text-lg text-[#4c01d6]">{description}</p>
          {reviews?.length > 0 && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-[#4c01d6] mb-4">
                User Reviews
              </h2>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 border border-[#9673ff] bg-white rounded shadow-sm"
                  >
                    <p className="text-[#4c01d6] font-semibold">
                      {review.name || "Anonymous"}
                    </p>
                    <p className="text-yellow-500">⭐ {review.rating}/5</p>
                    <p>{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <ReviewForm
        canReview={canReview}
        appId={id}
        addReview={addReview}
      ></ReviewForm>
    </>
  );
};

export default AppDetails;
