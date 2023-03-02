import React from 'react';

const SearchIcon = (props: any) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.6">
        <path
          d="M6.14286 11.2857C8.98318 11.2857 11.2857 8.98318 11.2857 6.14286C11.2857 3.30254 8.98318 1 6.14286 1C3.30254 1 1 3.30254 1 6.14286C1 8.98318 3.30254 11.2857 6.14286 11.2857Z"
          stroke="#06152B"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M13.0001 13.0001L10.4287 10.4287"
          stroke="#06152B"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
