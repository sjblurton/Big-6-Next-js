import React from "react";

const WatchIcon = ({ isPage }) => {
  isPage = isPage === "watch";
  const color = !!isPage ? "#fff" : "#8C8CA2";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      fill="none"
      viewBox="0 0 43 43"
    >
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.542"
        clipPath="url(#clip0)"
      >
        <path d="M21.5 33.896c6.846 0 12.396-5.55 12.396-12.396 0-6.846-5.55-12.396-12.396-12.396-6.846 0-12.396 5.55-12.396 12.396 0 6.846 5.55 12.396 12.396 12.396z"></path>
        <path d="M21.5 16.188V21.5l2.656 2.656M29.486 30.974l-.62 6.782a3.54 3.54 0 01-3.541 3.223h-7.668a3.542 3.542 0 01-3.541-3.223l-.62-6.782m.018-18.948l.62-6.782a3.542 3.542 0 013.523-3.223h7.703a3.541 3.541 0 013.542 3.223l.62 6.782"></path>
      </g>
      <defs>
        <clipPath id="clip0">
          <path
            fill="#fff"
            d="M0 0H42.5V42.5H0z"
            transform="translate(.25 .25)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default WatchIcon;
