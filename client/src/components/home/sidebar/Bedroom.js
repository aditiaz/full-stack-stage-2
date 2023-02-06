import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

const styles = {
  buttonProperty: {
    width: "55px",
    height: "40px",
    fontWeight: "700",
    fontSize: "18px",
    border: "none",
  },
};

function Bedroom() {
  const [bedValue, setBedValue] = useState("3");

  const bedrooms = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5+", value: "5" },
  ];

  return (
    <div className="mb-2">
      <div style={{ color: "#929292", fontSize: "14px", fontWeight: "500" }}>
        Bedroom
      </div>
      <ButtonGroup className="d-flex justify-content-between gap-3 mt-2">
        {bedrooms.map((bedroom, idx) => (
          <ToggleButton
            key={idx}
            id={`bedroom-${idx}`}
            type="radio"
            variant={bedValue === bedroom.value ? "primary" : "light"}
            name="bedroom"
            value={bedroom.value}
            checked={bedValue === bedroom.value}
            className="rounded d-flex justify-content-center align-items-center"
            style={styles.buttonProperty}
            onChange={(e) => setBedValue(e.currentTarget.value)}
          >
            {bedroom.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default Bedroom;
