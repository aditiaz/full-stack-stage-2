import React from "react";
import "../App.css";

import {
  Badge,
  Card,
  Container,
  Image,
  ListGroup,
  Table,
} from "react-bootstrap";

import { useQuery } from "react-query";
import { API } from "../config/api";

import jwt from "jwt-decode";

// import convertRupiah from "rupiah-format";

// import { useParams } from "react-router-dom";

// import data from "../components/data/homes";

import IconNavbar from "../assets/icons/IconNavbar.png";
import Invoice from "../assets/invoice.png";
// import Moment from "react-moment";

function MyBooking() {
  // const getData = JSON.parse(localStorage.getItem("Date"));

  // const getDataProfile = JSON.parse(localStorage.getItem("SignUp"));

  // const date = new Date();

  const getToken = localStorage.getItem("token");

  const hasilDecode = jwt(getToken);

  console.log("hasil decode", hasilDecode.id);

  // Fetching data user from database
  const { data: transactionid } = useQuery("transactionidCache", async () => {
    const response = await API.get("/transactionid/" + hasilDecode.id);
    console.log("ini response transaction", response);
    return response.data.data;
  });

  console.log("ini transaction", transactionid);

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
                    INVOICE
                  </div>
                  <div
                    style={{
                      fontSize: "18px",
                      color: "#878787",
                      fontWeight: "400",
                    }}
                  >
                    {/* <Moment format="dddd" className="fw-bold">
                      {date}
                    </Moment>
                    , <Moment format="D MMM YYYY">{date}</Moment> */}
                    Saturday, 1 January 2023
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex flex-column gap-3">
                  <div style={{ fontSize: "24px", fontWeight: "800" }}>
                    {/* {data[id - 1].name_property} */}
                    {/* {houses?.name} */}
                    Astina
                  </div>
                  <div style={{ fontSize: "14px", width: "282px" }}>
                    {/* {data[id - 1].address} */}
                    Sawangan, Depok
                  </div>
                  <div className="ms-3">
                    <Badge bg="success" className="rounded-0">
                      Approve
                    </Badge>
                  </div>
                </div>
                <div>
                  <ul className="timeline mt-3">
                    <li className="timeline-item-top mb-5">
                      <h5 className="fw-bold">Check-in</h5>
                      <div style={{ fontSize: "14px", color: "#959595" }}>
                        {/* <Moment format="DD MMM YYYY">{getData.checkin}</Moment> */}
                        1 January 2023
                      </div>
                    </li>
                    <li className="timeline-item-bottom">
                      <h5 className="fw-bold">Check-out</h5>
                      <div style={{ fontSize: "14px", color: "#959595" }}>
                        {/* <Moment format="DD MMM YYYY">{getData.checkout}</Moment> */}
                        4 January 2023
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
                      {/* {data[id - 1].amenities} */}
                      Furnished
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
                      {/* {data[id - 1].rent} */}
                      Year
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={Invoice} />
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
                    {/* {getDataProfile.fullname} */}
                    {/* {user?.fullname} */}
                    Farid N
                  </td>
                  <td
                    style={{
                      fontSize: "18px",
                      color: "#B1B1B1",
                    }}
                  >
                    {/* {getDataProfile.gender} */}
                    Male
                  </td>
                  <td
                    style={{
                      fontSize: "18px",
                      color: "#B1B1B1",
                    }}
                  >
                    {/* {getDataProfile.phone} */}
                    081369036136
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
                    {/* 1 {data[id - 1].rent} */}1 Year
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
                      color: "#3CF71E",
                      borderBottomStyle: "none",
                    }}
                  >
                    {/* {data[id - 1].price} */}
                    3.000.000
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

export default MyBooking;
