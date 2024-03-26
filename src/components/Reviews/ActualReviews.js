'use client';
import { useState } from 'react';

const ReviewCard = ({ avatar, name, stars, review }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] sm:h-[300px] snap-center bg-gray-100 p-10 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="flex items-center mb-2">
        <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-4" />
        <h2 className="text-lg font-semibold">{name}</h2>
      </div>
      <div className="flex items-center mb-2">
        <div className="flex">
          {[...Array(stars)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.42 6.637L18 8.82l-5 4.324 1.49 6.143L10 14.682 5.51 19.287l1.49-6.144-5-4.324 5.58-1.183z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-700">
        {review.length > 100 && !showModal
          ? review.slice(0, 100) + '...'
          : review}
      </p>
      {review.length > 100 && (
        <button
          onClick={() => setShowModal(true)}
          className="text-blue-500 hover:text-[#00008B] focus:outline-none"
        >
          Read more
        </button>
      )}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 shadow-md">
            <div className="flex mx-24 px-5  justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{name}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="hover:text-[#00008B] focus:outline-none"
              >
                Close
              </button>
            </div>
            <div className="flex mx-24 px-5 ">
              {[...Array(stars)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 1l2.42 6.637L18 8.82l-5 4.324 1.49 6.143L10 14.682 5.51 19.287l1.49-6.144-5-4.324 5.58-1.183z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="mx-24 px-5 mt-3">{review}</p>
          </div>
        </div>
      )}
    </article>
  );
};

export default ReviewCard;
