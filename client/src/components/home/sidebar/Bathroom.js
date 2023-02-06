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

function Bathroom() {
  const [bathValue, setBathValue] = useState("2");

  const bathrooms = [
    { name: "1", value: "1" },
    { name: "2", value: "2" },
    { name: "3", value: "3" },
    { name: "4", value: "4" },
    { name: "5+", value: "5" },
  ];

  return (
    <div className="mb-2">
      <div style={{ color: "#929292", fontSize: "14px", fontWeight: "500" }}>
        Bathroom
      </div>
      <ButtonGroup className="d-flex justify-content-between gap-3 mt-2">
        {bathrooms.map((bathroom, idx) => (
          <ToggleButton
            key={idx}
            id={`bathroom-${idx}`}
            type="radio"
            variant={bathValue === bathroom.value ? "primary" : "light"}
            name="bathroom"
            value={bathroom.value}
            checked={bathValue === bathroom.value}
            className="rounded d-flex justify-content-center align-items-center"
            style={styles.buttonProperty}
            onChange={(e) => setBathValue(e.currentTarget.value)}
          >
            {bathroom.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

export default Bathroom;
