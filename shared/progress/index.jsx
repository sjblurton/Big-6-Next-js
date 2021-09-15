import React, { useEffect, useRef, useState } from "react";

function Progress({ goal, reps }) {
  const [count, setCount] = useState(0);
  const [dashOffset, setDashOffset] = useState(345.4);
  const timeout1Id = useRef(null);
  const timeout2Id = useRef(null);
  const onePercent = goal / 100;
  const percent = Math.round(reps / onePercent);
  const dashOffsetTarget = (345.4 * ((100 - percent) / 100)).toFixed(1);

  useEffect(() => {
    timeout1Id.current = setInterval(() => {
      setCount(count + 1);
    }, 25);
    timeout2Id.current = setInterval(() => {
      setDashOffset(dashOffset - 1);
    }, 2);
    if (Math.round(dashOffset) === Math.round(dashOffsetTarget))
      clearInterval(timeout2Id.current);
    if (count === percent) clearInterval(timeout1Id.current);
    return () => {
      clearInterval(timeout2Id.current);
      clearInterval(timeout1Id.current);
    };
  }, [count, percent, dashOffsetTarget, dashOffset]);

  return (
    <svg
      width="120"
      height="120"
      style={{ background: "#34425D", borderRadius: "50%" }}
    >
      <defs>
        <linearGradient id="linear" x1="0%" y1="0%" x2="80%" y2="20%">
          <stop offset="0%" stopColor="#f12711" />
          <stop offset="100%" stopColor="#f5af19" />
        </linearGradient>
      </defs>

      <g
        fill="transparent"
        strokeDasharray="345.4"
        strokeWidth="10"
        transform="rotate(-90 60 60)"
      >
        <circle cx="60" cy="60" r="55" stroke="#8C8CA1"></circle>
        <circle
          cx="60"
          cy="60"
          r="55"
          stroke="url(#linear)"
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
        ></circle>
      </g>
      <text
        x="50%"
        y="30%"
        fill="#fff"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="smaller"
      >
        Reps: {reps}
      </text>
      <text
        fill="#fff"
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontWeight="bold"
        fontSize="larger"
      >
        {count}%
      </text>
      <text
        fill="#fff"
        x="50%"
        y="70%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="smaller"
      >
        Goal: {goal}
      </text>
    </svg>
  );
}

export default Progress;
