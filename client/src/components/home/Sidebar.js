import React from "react";

import TypeOfRent from "./sidebar/TypeOfRent";
import Bedroom from "./sidebar/Bedroom";
import Bathroom from "./sidebar/Bathroom";
import { Button, Form, Image, InputGroup } from "react-bootstrap";

import IconCalender from "../../assets/icons/IconCalender.png";

function Sidebar() {
  return (
    <>
      <TypeOfRent />
      <div className="mb-4">
        <div
          className="mb-2"
          style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
        >
          Date
        </div>
        <InputGroup style={{ height: "50px" }}>
          <InputGroup.Text id="btnGroupAddon" className="bg-light border-0">
            <Image src={IconCalender} />
          </InputGroup.Text>
          <Form.Control
            type="date"
            aria-label="Input group example"
            aria-describedby="btnGroupAddon"
            className="bg-light"
            style={{ borderTop: "0", borderRight: "0", borderBottom: "0" }}
          />
        </InputGroup>
      </div>
      <div className="mb-4">
        <div
          className="mb-2"
          style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
        >
          Property Room
        </div>
        <Bedroom />
        <Bathroom />
      </div>
      <div className="mb-4">
        <div
          className="mb-2"
          style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
        >
          Amenities
        </div>
        <InputGroup className="d-flex justify-content-between">
          <Form.Label
            style={{ fontSize: "18px", fontWeight: "500", color: "#929292" }}
          >
            Furnished
          </Form.Label>
          <Form.Check type="checkbox" />
        </InputGroup>
        <InputGroup className="d-flex justify-content-between">
          <Form.Label
            style={{ fontSize: "18px", fontWeight: "500", color: "#929292" }}
          >
            Pet Allowed
          </Form.Label>
          <Form.Check type="checkbox" />
        </InputGroup>
        <InputGroup className="d-flex justify-content-between">
          <Form.Label
            style={{ fontSize: "18px", fontWeight: "500", color: "#929292" }}
          >
            Shared Accomodation
          </Form.Label>
          <Form.Check type="checkbox" />
        </InputGroup>
      </div>
      <div className="mb-5">
        <div
          className="mb-2"
          style={{ color: "#000000", fontSize: "24px", fontWeight: "800" }}
        >
          Budget
        </div>
        <Form.Group className="d-flex justify-content-between align-items-center mb-3">
          <Form.Label
            style={{ fontSize: "18px", fontWeight: "700", color: "#000000" }}
          >
            Less than IDR.
          </Form.Label>
          <Form.Control type="text" className="w-50" placeholder="8.000.000" />
        </Form.Group>
      </div>
      <div className="d-flex justify-content-end">
        <Button
          style={{
            width: "140px",
            height: "50px",
          }}
        >
          APPLY
        </Button>
      </div>
    </>
  );
}

export default Sidebar;
