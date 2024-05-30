import * as React from "react";

const WeightSolid = (props) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.3162 13.3078C16.9816 5.89741 7.01879 5.89741 3.68413 13.3078C3.51415 13.6855 3.07014 13.8539 2.69241 13.6839C2.31468 13.514 2.14627 13.07 2.31624 12.6922C6.18158 4.10259 17.8188 4.10259 21.6841 12.6922C21.8541 13.07 21.6857 13.514 21.308 13.6839C20.9302 13.8539 20.4862 13.6855 20.3162 13.3078Z"
      fill="black"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.75 14C15.75 11.9289 14.0711 10.25 12 10.25C9.92893 10.25 8.25 11.9289 8.25 14C8.25 16.0711 9.92893 17.75 12 17.75C14.0711 17.75 15.75 16.0711 15.75 14Z"
      fill="black"
    />
  </svg>
);

export default WeightSolid;
