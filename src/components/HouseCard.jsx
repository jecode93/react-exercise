import React from "react";
import { isValidColor } from "../utils/colorUtils";
import "./HouseList.css";

const HouseCard = ({ house }) => {

  const getGradient = (colors) => {
    if (colors) {
      const colorArray = colors.split(" and ");
      // Check if both colors are valid
      const areValidColors = colorArray.every(isValidColor);

      if (areValidColors) {
        return `linear-gradient(to right, ${colorArray.join(", ")})`;
      }
    }
    // Fallback to white to black gradient
    return "linear-gradient(to right, white, black)";
  };

  return (
    <div className="house-card">
      <div className="name">
        <h2>{house.name}</h2>
        <p>{house.animal}</p>
      </div>
      <div
        style={{
          background: getGradient(house.houseColours),
          height: 25,
          borderRadius: 5,
          marginBottom: 20,
        }}
      ></div>
      <p>
        Founder: <strong>{house.founder}</strong>
      </p>
    </div>
  );
};

export default HouseCard;
