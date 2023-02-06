import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const styles = {
  buttonType: {
    width: "100px",
    height: "50px",
    fontWeight: "500",
    fontSize: "18px",
    border: "none",
  },
};

function TypeOfRent() {
  const [radioValue, setRadioValue] = useState("3");

  const rents = [
    { name: "Day", value: "1" },
    { name: "Month", value: "2" },
    { name: "Year", value: "3" },
  ];

  return (
    <div className="mb-4">
      <div
        className="mb-2"
        style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
      >
        Type of Rent
      </div>
      <ButtonGroup className="d-flex justify-content-between gap-3">
        {rents.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={radioValue === radio.value ? "primary" : "light"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            className="rounded d-flex justify-content-center align-items-center"
            style={styles.buttonType}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default TypeOfRent;
