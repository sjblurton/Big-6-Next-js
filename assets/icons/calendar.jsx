import React from "react";

const CalendarIcon = ({ isPage }) => {
  isPage = isPage === "calender";
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
        d="M34.396 7.333H9.604a3.542 3.542 0 00-3.541 3.542v24.792a3.542 3.542 0 003.541 3.541h24.792a3.542 3.542 0 003.541-3.541V10.875a3.542 3.542 0 00-3.541-3.542zM29.083 3.792v7.083M14.917 3.792v7.083M6.063 17.958h31.875"
      ></path>
    </svg>
  );
};

export default CalendarIcon;
