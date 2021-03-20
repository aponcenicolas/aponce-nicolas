import React from "react";

const Title = ({ title, span }) => {
  return (
    <div className="Title" style={{ textAlign: "center" }}>
      {title}
      <span>{span}</span>
    </div>
  );
};

export default Title;
