import * as React from "react";

const EmptyDataIllustration = ({ width = "61", height = "59" }) => {
  return (
    <svg width={`${width}px`} height={`${height}px`} viewBox="0 0 61 59">
      <g fill="none" fillRule="evenodd">
        <path
          fill="#F4F4F4"
          d="M38.133 13.186H21.947a1.391 1.391 0 00-1.39 1.391V50.55l-.186.057-3.97 1.216a.742.742 0 01-.927-.493L3.664 12.751a.74.74 0 01.492-.926l6.118-1.874 17.738-5.43 6.119-1.873a.741.741 0 01.926.492L38.076 13l.057.186z"
        />
        <path
          fill="#8D8D8D"
          d="M41.664 13L38.026 1.117A1.576 1.576 0 0036.057.071l-8.602 2.633-17.737 5.43-8.603 2.634a1.58 1.58 0 00-1.046 1.97l12.436 40.616a1.579 1.579 0 001.968 1.046l5.898-1.805.185-.057v-.194l-.185.057-5.952 1.822a1.393 1.393 0 01-1.737-.923L.247 12.682a1.392 1.392 0 01.923-1.738L9.772 8.31 27.51 2.881 36.112.247a1.392 1.392 0 011.737.923L41.47 13l.057.186h.193l-.057-.185z"
        />
        <path
          fill="#C6C6C6"
          d="M11.378 11.855a.836.836 0 01-.798-.59L9.385 7.361a.838.838 0 01.06-.636.841.841 0 01.494-.406l16.318-4.996a.836.836 0 011.042.554l1.195 3.902a.838.838 0 01-.554 1.043l-16.318 4.995a.807.807 0 01-.244.037z"
        />
        <circle cx={17.636} cy={2.314} r={1.855} fill="#C6C6C6" />
        <circle
          cx={17.636}
          cy={2.314}
          r={1.175}
          fill="#FFF"
          fillRule="nonzero"
        />
        <path
          fill="#F4F4F4"
          d="M55.893 53.995H24.544a.788.788 0 01-.788-.789V15.644c0-.435.353-.788.788-.788h31.349c.435 0 .788.353.788.788v37.562a.79.79 0 01-.788.789z"
        />
        <path
          fill="#8D8D8D"
          d="M41.47 13H21.948a1.58 1.58 0 00-1.576 1.577V52.4l.185-.057V14.577a1.391 1.391 0 011.391-1.39h19.581L41.471 13zm17.02 0H21.947a1.58 1.58 0 00-1.576 1.577v42.478c0 .87.706 1.576 1.576 1.577H58.49a1.578 1.578 0 001.576-1.577V14.577a1.578 1.578 0 00-1.576-1.576zm1.39 44.055c0 .768-.622 1.39-1.39 1.392H21.947a1.392 1.392 0 01-1.39-1.392V14.577c0-.768.622-1.39 1.39-1.39H58.49c.768 0 1.39.622 1.39 1.39v42.478z"
        />
        <path
          fill="#C6C6C6"
          d="M48.751 17.082H31.686a.836.836 0 01-.835-.835v-4.081c0-.46.374-.834.835-.835H48.75c.461 0 .834.374.835.835v4.08a.836.836 0 01-.835.836z"
        />
        <circle cx={40.218} cy={9.755} r={1.855} fill="#C6C6C6" />
        <circle
          cx={40.218}
          cy={9.755}
          r={1.13}
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
};

export default EmptyDataIllustration;
