import React from "react";

const Logo = ({ logo }) => {
  return (
    <div className="flex-fill">
      <a href="#">
        <img src={logo} alt="Atelier Materi - Haute parfumerie française" />
      </a>
    </div>
  );
};

export default Logo;
