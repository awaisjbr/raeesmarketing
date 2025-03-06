import React from "react";
import {RotatingLines} from "react-loader-spinner"

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        strokeColor="green"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;