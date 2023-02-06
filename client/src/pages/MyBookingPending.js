import React from "react";
import "../App.css";

import {
  Badge,
  Card,
  Container,
  Figure,
  Image,
  ListGroup,
  Table,
} from "react-bootstrap";

import { useParams } from "react-router-dom";

import data from "../components/data/homes";

import IconNavbar from "../assets/icons/IconNavbar.png";
import PaymentProof from "../assets/payment_proof.png";
import Moment from "react-moment";

function MyBookingPending() {
  const getData = JSON.parse(localStorage.getItem("Date"));

  const getDataProfile = JSON.parse(localStorage.getItem("SignUp"));

  const date = new Date();

  const { id } = useParams();

  return (
    <div className="bg-light py-5">
      <Container>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className="d-flex justify-content-between mb-4">
                <div>
                  <Image src={IconNavbar} />
                </div>
                <div className="d-flex flex-column align-items-center">
                  <div style={{ fontSize: "36px", fontWeight: "800" }}>
                    Booking
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      color: "#878787",
                      fontWeight: "400",
                    }}
                  >
                    <Moment format="dddd" className="fw-bold">
                      {date}
                    </Moment>
                    , <Moment format="D MMM YYYY">{date}</Moment>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column gap-3">
                  <div style={{ fontSize: "24px", fontWeight: "800" }}>
                    {data[id - 1].name_property}
                  </div>
                  <div style={{ fontSize: "14px", width: "282px" }}>
                    {data[id - 1].address}
                  </div>
                  <div className="ms-3">
                    <Badge bg="warning" className="rounded-0">
                      Waiting Approve
                    </Badge>
                  </div>
                </div>
                <div>
                  <ul className="timeline mt-3">
                    <li className="timeline-item-top mb-5">
                      <h5 className="fw-bold">Check-in</h5>
                      <div style={{ fontSize: "14px", color: "#959595" }}>
                        <Moment format="DD MMM YYYY">{getData.checkin}</Moment>
                      </div>
                    </li>
                    <li className="timeline-item-bottom">
                      <h5 className="fw-bold">Check-out</h5>
                      <div style={{ fontSize: "14px", color: "#959595" }}>
                        <Moment format="DD MMM YYYY">{getData.checkout}</Moment>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="d-flex flex-column gap-4">
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      Amenites
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#959595",
                      }}
                    >
                      {data[id - 1].amenities}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontSize: "18px", fontWeight: "700" }}>
                      Type of Rent
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                        color: "#959595",
                      }}
                    >
                      {data[id - 1].rent}
                    </div>
                  </div>
                </div>
                <div>
                  <Figure className="d-flex flex-column align-items-center mb-0 p-2">
                    <Figure.Image
                      width={121}
                      height={130}
                      src={PaymentProof}
                      className="img-thumbnail"
                    />
                    <Figure.Caption>upload payment proof</Figure.Caption>
                  </Figure>
                </div>
              </div>
            </ListGroup.Item>
            <Table responsive>
              <thead>
                <tr>
                  <th
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                  >
                    No
                  </th>
                  <th
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                  >
                    Full Name
                  </th>
                  <th
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                  >
                    Gender
                  </th>
                  <th
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                    colSpan={3}
                  >
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    style={{
                      fontSize: "18px",
                      color: "#B1B1B1",
                    }}
                  >
                    1
                  </td>
                  <td
                    style={{
                      fontSize: "18px",
                      color: "#B1B1B1",
                    }}
                  >
                    {getDataProfile.fullname}
                  </td>
                  <td
                    style={{
                      fontSize: "18px",
                      color: "#B1B1B1",
                    }}
                  >
                    {getDataProfile.gender}
                  </td>
                  <td
                    style={{
                      fontSize: "18px",
                      color: "#B1B1B1",
                    }}
                  >
                    {getDataProfile.phone}
                  </td>
                  <td
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                    className="text-end"
                  >
                    Long time rent:
                  </td>
                  <td
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                    }}
                    colspan={2}
                  >
                    1 {data[id - 1].rent}
                  </td>
                </tr>
                <tr style={{ borderBottomStyle: "none" }}>
                  <td colSpan={4} style={{ borderBottomStyle: "none" }}></td>
                  <td
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                      borderBottomStyle: "none",
                    }}
                    className="text-end"
                  >
                    Total:
                  </td>
                  <td
                    colspan={2}
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "#FF0000",
                      borderBottomStyle: "none",
                    }}
                  >
                    {data[id - 1].price}
                  </td>
                </tr>
              </tbody>
            </Table>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
}

export default MyBookingPending;
