import * as React from "react";

function SearchLogo(props: React.SVGProps<SVGSVGElement>) {
  const iconStyle = {
    display: "block",
    stroke: "currentcolor",
    overflow: "visible",
  };

  return (
    <svg
      viewBox="0 0 500 500"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={iconStyle}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fillRule="nonzero">
        <path d="M 505.749 475.587 l -145.6 -145.6 c 28.203 -34.837 45.184 -79.104 45.184 -127.317 c 0 -111.744 -90.923 -202.667 -202.667 -202.667 S 0 90.925 0 202.669 s 90.923 202.667 202.667 202.667 c 48.213 0 92.48 -16.981 127.317 -45.184 l 145.6 145.6 c 4.16 4.16 9.621 6.251 15.083 6.251 s 10.923 -2.091 15.083 -6.251 C 514.091 497.411 514.091 483.928 505.749 475.587 Z M 202.667 362.669 c -88.235 0 -160 -71.765 -160 -160 s 71.765 -160 160 -160 s 160 71.765 160 160 S 290.901 362.669 202.667 362.669 Z" />
      </g>
    </svg>
  );
}

export default SearchLogo;
