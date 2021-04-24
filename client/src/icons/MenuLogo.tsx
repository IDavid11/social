import * as React from "react";

function MenuLogo(props: React.SVGProps<SVGSVGElement>) {
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
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
        />{" "}
      </g>
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"
      />
    </svg>
  );
}

export default MenuLogo;
