import * as React from "react";

const WeightDynamic = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M3 20.4V3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V20.4C21 20.7314 20.7314 21 20.4 21H3.6C3.26863 21 3 20.7314 3 20.4Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <path
      d="M6 18L18 18"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14V6M12 6L15.5 9.5M12 6L8.5 9.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default WeightDynamic;
