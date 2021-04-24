import * as React from "react";

function UserLogo(props: React.SVGProps<SVGSVGElement>) {
  const iconStyle = {
    display: "block",
    stroke: "currentcolor",
    overflow: "visible",
  };

  return (
    <svg
      viewBox="0 0 42 50"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fillRule="nonzero">
        <path d="M 22.766 0.001 C 10.194 0.001 0 10.193 0 22.766 s 10.193 22.765 22.766 22.765 c 12.574 0 22.766 -10.192 22.766 -22.765 S 35.34 0.001 22.766 0.001 Z M 22.766 6.808 c 4.16 0 7.531 3.372 7.531 7.53 c 0 4.159 -3.371 7.53 -7.531 7.53 c -4.158 0 -7.529 -3.371 -7.529 -7.53 C 15.237 10.18 18.608 6.808 22.766 6.808 Z M 22.761 39.579 c -4.149 0 -7.949 -1.511 -10.88 -4.012 c -0.714 -0.609 -1.126 -1.502 -1.126 -2.439 c 0 -4.217 3.413 -7.592 7.631 -7.592 h 8.762 c 4.219 0 7.619 3.375 7.619 7.592 c 0 0.938 -0.41 1.829 -1.125 2.438 C 30.712 38.068 26.911 39.579 22.761 39.579 Z"></path>
      </g>
    </svg>
  );
}

export default UserLogo;
