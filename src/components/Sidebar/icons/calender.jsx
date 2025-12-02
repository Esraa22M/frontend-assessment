import * as React from "react";

const Calender = ({ fillcolor = "#666C83", size = 40, ...props }) => {
  const dimensions = React.useMemo(() => ({ width: size, height: size }), [size]);

  return (
    <svg
      width={dimensions.width}
      height={dimensions.height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={40} height={40} rx={13} fill="none" />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1202 9.8167C16.6559 9.8167 17.0901 10.1785 17.0901 10.6249V13.8577C17.0901 14.304 16.6559 14.6659 16.1202 14.6659C15.5846 14.6659 15.1504 14.304 15.1504 13.8577V10.6249C15.1504 10.1785 15.5846 9.8167 16.1202 9.8167Z"
        fill={fillcolor}
      />

      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.88 9.8167C24.4156 9.8167 24.8498 10.1785 24.8498 10.6249V13.8577C24.8498 14.304 24.4156 14.6659 23.88 14.6659C23.3444 14.6659 22.9102 14.304 22.9102 13.8577V10.6249C22.9102 10.1785 23.3444 9.8167 23.88 9.8167Z"
        fill={fillcolor}
      />

      <path
        opacity={0.4}
        d="M29.2131 16.9644V25.4602C29.2131 25.6154 29.2034 25.7705 29.1937 25.916H10.8055C10.7958 25.7705 10.7861 25.6154 10.7861 25.4602V16.9644C10.7861 14.3555 12.9004 12.2413 15.5093 12.2413H24.49C27.0988 12.2413 29.2131 14.3555 29.2131 16.9644Z"
        fill={fillcolor}
      />

      <path
        d="M29.1938 25.916C28.9611 28.3115 26.9438 30.1833 24.4901 30.1833H15.5094C13.0557 30.1833 11.0384 28.3115 10.8057 25.916H29.1938Z"
        fill={fillcolor}
      />
    </svg>
  );
};

export default Calender;
