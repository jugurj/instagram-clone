import { useState } from "react";

function Story({ img, username }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <div className="relative">
        <img
          className="h-14 w-14 p-[2px] rounded-full border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
          src={img}
          alt="User profile image"
          onError={(event) =>
            (event.target.src =
              "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=")
          }
          onLoad={() => setImageLoaded(true)}
        />

        <div
          className={
            "absolute top-0 left-0 h-14 w-14 p-[2px] border-red-500 border-2 rounded-full bg-gray-200 " +
            (imageLoaded && "hidden")
          }
        ></div>

        <div
          className={
            "absolute top-[calc(50%+1px)] left-[calc(50%+1px)] transform -translate-x-1/2 -translate-y-1/2 " +
            (imageLoaded && "hidden")
          }
        >
          <svg
            className={"animate-spin h-5 w-5 text-gray-800"}
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>

      <p className="w-14 mt-1 text-[0.625rem] truncate text-center">
        {username}
      </p>
    </div>
  );
}

export default Story;
