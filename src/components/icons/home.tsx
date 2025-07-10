import React, { type SVGProps } from "react";

export default function HomeIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height="800px"
      width="800px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="black"
      {...props}
    >
      <polygon
        points="434.162,293.382 434.162,493.862 308.321,493.862 308.321,368.583 203.682,368.583 203.682,493.862 
		77.841,493.862 77.841,293.382 256.002,153.862"
      />
      <polygon points="0,242.682 256,38.93 512,242.682 482.21,285.764 256,105.722 29.79,285.764" />
      <polygon points="439.853,18.138 439.853,148.538 376.573,98.138 376.573,18.138" />
    </svg>
  );
}
