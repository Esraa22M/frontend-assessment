import * as React from "react";

const FolderkanbanComponent = ({ fillcolor = "#666C83", size = 40, ...props }) => {
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
        d="M21.4438 23.0279H12.326C10.4883 23.0279 9.31705 21.0589 10.2056 19.4434L12.5582 15.1622L14.7594 11.1536C15.6782 9.48758 18.0814 9.48758 19.0002 11.1536L21.2114 15.1622L22.2716 17.0907L23.5642 19.4434C24.4526 21.0589 23.2814 23.0279 21.4438 23.0279Z"
        fill={fillcolor}
      />

      <path
        d="M30.097 23.5327C30.097 27.1576 27.1587 30.0959 23.5338 30.0959C19.909 30.0959 16.9707 27.1576 16.9707 23.5327C16.9707 23.3611 16.9808 23.1995 16.9909 23.0279H21.4437C23.2814 23.0279 24.4527 21.0589 23.5641 19.4434L22.2717 17.0908C22.6756 17.01 23.0997 16.9696 23.5338 16.9696C27.1587 16.9696 30.097 19.9079 30.097 23.5327Z"
        fill={fillcolor}
      />
    </svg>
  );
};

export default FolderkanbanComponent;
