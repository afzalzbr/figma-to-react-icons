import * as React from "react";

const StateDefault = (props) => (
  <svg
    width={props.width || "1em"}
    height={props.height || "1em"}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <g clipPath="url(#clip0_199_33163)">
      <path
        d="M8 7.79166V11.125"
        stroke="#919191"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 5.13167L8.00667 5.12426"
        stroke="#919191"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.00001 14.7917C11.6819 14.7917 14.6667 11.8069 14.6667 8.125C14.6667 4.4431 11.6819 1.45834 8.00001 1.45834C4.31811 1.45834 1.33334 4.4431 1.33334 8.125C1.33334 11.8069 4.31811 14.7917 8.00001 14.7917Z"
        stroke="#919191"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_199_33163">
        <rect
          width={16}
          height={16}
          fill="white"
          transform="translate(0 0.125)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default StateDefault;
