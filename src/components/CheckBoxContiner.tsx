import React, { useState, useCallback } from "react";
import CheckBox from "./CheckBox";
import { IcheckBoxContiner } from "./interfaces";

export default function CheckBoxContiner({ label = "" }: IcheckBoxContiner) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = useCallback((newValue: boolean) => {
    setIsChecked(newValue);
  }, []);

  return (
    <CheckBox
      checked={isChecked}
      onChange={handleCheckboxChange}
      label={label}
    />
  );
}
