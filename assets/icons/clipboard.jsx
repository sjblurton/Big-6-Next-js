import React from "react";

const ClipboardIcon = ({ isPage }) => {
  isPage = isPage === "clipboard";
  const color = !!isPage ? "#fff" : "#8C8CA2";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="43"
      fill="none"
      viewBox="0 0 44 43"
    >
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.542"
        d="M29.083 7.333h3.542a3.542 3.542 0 013.542 3.542v24.792a3.542 3.542 0 01-3.542 3.541h-21.25a3.542 3.542 0 01-3.542-3.541V10.875a3.542 3.542 0 013.542-3.542h3.542"
      ></path>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3.542"
        d="M27.313 3.792H16.688a1.77 1.77 0 00-1.771 1.77v3.542c0 .978.793 1.771 1.77 1.771h10.625a1.77 1.77 0 001.771-1.77V5.562a1.77 1.77 0 00-1.77-1.771z"
      ></path>
    </svg>
  );
};

export default ClipboardIcon;
