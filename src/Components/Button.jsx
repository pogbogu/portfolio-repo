import React from "react";

const Button = ({ name, isBeam, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {name}
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
    </button>
  );
};

export default Button;
