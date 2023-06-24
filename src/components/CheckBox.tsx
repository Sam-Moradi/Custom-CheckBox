import React from "react";
import "./../CheckBox.css";
import { IcheckBox } from "./interfaces";

const CheckBox: React.FC<IcheckBox> = ({ checked, onChange, label }) => {
  const handleCheckboxChange = () => {
    onChange(!checked);
  };

  return (
    <div className="checkbox-group">
      {label && <label>{label}</label>}
      <div className="checkbox-container" onClick={handleCheckboxChange}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="checkbox-input"
        />
        <span className={`checkmark ${checked ? "checked" : ""}`} />
      </div>
    </div>
  );
};

export default CheckBox;
