import * as React from "react";

const FileSignatureComponent = ({ fillcolor = "#666C83", ...props }) => {

  const paths = React.useMemo(() => (
    <>
      <path
        opacity={0.4}
        d="M24 20.7203V26.1103C24 28.4503 22.44 30.0003 20.11 30.0003H13.89C11.56 30.0003 10 28.4503 10 26.1103V18.3403C10 16.0003 11.56 14.4503 13.89 14.4503H17.72C18.75 14.4503 19.74 14.8603 20.47 15.5903L22.86 17.9703C23.59 18.7003 24 19.6903 24 20.7203Z"
        fill={fillcolor}
      />
      <path
        d="M30 16.2797V21.6697C30 23.9997 28.44 25.5597 26.11 25.5597H24V20.7197C24 19.6897 23.59 18.6997 22.86 17.9697L20.47 15.5897C19.74 14.8597 18.75 14.4497 17.72 14.4497H16V13.8897C16 11.5597 17.56 9.99969 19.89 9.99969H23.72C24.75 9.99969 25.74 10.4097 26.47 11.1397L28.86 13.5297C29.59 14.2597 30 15.2497 30 16.2797Z"
        fill={fillcolor}
      />
    </>
  ), [fillcolor]);

  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fillcolor="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {paths}
    </svg>
  );
};

export default FileSignatureComponent;
