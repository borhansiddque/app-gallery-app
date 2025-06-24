import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ReviewForm = ({ canReview, addReview }) => {
  const { user } = useContext(AuthContext);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  // const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!canReview) {
      alert("You must install the App to Submit a review");
      return;
    }

    if (rating < 1 || rating > 5) {
      alert("Rating must be between 1 and 5");
      return;
    }

    const newReview = {
      name: user.displayName,
      text: reviewText,
      rating: Number(rating),
    };

    addReview(newReview);
    setReviewText("");
    setRating("");
  };

  return (
    <div className="bg-[#f2f0ff] p-5 mb-14 md:w-11/12 lg:w-10/12 mx-auto">
      {/* <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#6914ff]">
          Submitted Reviews:
        </h3>
        {reviews.length === 0 ? (
          <p className="text-gray-500 mt-2">No reviews yet.</p>
        ) : (
          <ul className="mt-2 space-y-4">
            {reviews.map((r, index) => (
              <li key={index} className="border border-[#6914ff] p-3 rounded">
                <p>
                  <strong className="text-[#6914ff]">Reviewer Name:</strong> {r.name}
                </p>
                <p>
                  <strong className="text-[#6914ff]">Rating:</strong> {r.rating}{" "}
                  / 5
                </p>
                <p>
                  <strong className="text-[#6914ff]">Review:</strong> {r.text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div> */}
      <h2 className="text-xl font-bold mb-4 text-[#6914ff]">Submit a Review</h2>
      {!canReview && (
        <p className="text-red-600 font-medium mb-2">
          You must install the app to leave a review.
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-[#6914ff]">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="w-full p-2 border border-[#6914ff] rounded outline-none"
            required
            disabled={!canReview}
          />
        </div>

        <div>
          <label className="block mb-1 text-[#6914ff]">
            Rating This App(1 to 5)
          </label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            className="w-full p-2 border border-[#6914ff] rounded outline-none"
            required
            disabled={!canReview}
          />
        </div>

        <button
          disabled={!canReview}
          className={`py-2 px-5 sm:py-3 sm:px-8 text-lg font-medium rounded text-white transition ${
            canReview
              ? "bg-[#4c01d6] hover:bg-[#6914ff]"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
