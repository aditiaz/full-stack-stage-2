import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

import { useQuery } from "react-query";
import { API } from "../../config/api";

import convertRupiah from "rupiah-format";

// import img1 from "../../assets/features/image1.png";

// import homes from "../data/homes";

function Content() {
  // const { id } = useParams();
  // Fetching data from database
  let { data: houses } = useQuery("housesCache", async () => {
    const response = await API.get("/houses");
    // console.log(response);
    return response.data.data;
  });

  // Fetching data from database
  // let { data: house } = useQuery("houseCache", async () => {
  //   const response = await API.get("/house" + id);
  //   // console.log(response);
  //   return response.data.data;
  // });

  console.log("ini response", houses);

  return (
    <Row xs={1} md={2} lg={3} className="g-4">
      {houses?.map((item, index) => (
        <Col key={index} item={item}>
          <Link
            // to={"/detail-property/" + id}
            to={`/detail-property/` + item.id}
            className="text-decoration-none text-dark"
            style={{ cursor: "pointer" }}
          >
            <Card className="h-100 p-2 bg-light">
              <Card.Img
                variant="top rounded"
                src={item.image}
                className="position-relative"
              />
              <Card.Text className="rounded px-3 py-1 mt-2 ms-2 bg-white position-absolute top-1 start-1 ">
                {item.ameneties}
              </Card.Text>
              <Card.Body className="px-0">
                <Card.Title className="fw-bold">
                  {convertRupiah.convert(item.price)} / {item.rent}
                </Card.Title>
                <Card.Text className="fw-bold mb-0">
                  {item.bedroom} Beds, {item.bathroom} Bath, {item.sqf} sqft
                </Card.Text>
                <Card.Text style={{ color: "#A8A8A8" }}>
                  {item.city.name}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
      {/* {houses.map((data, index) => {
        return (
          <Col key={index}>
            <Link
              to={"/detail-property/" + (index + 1)}
              className="text-decoration-none text-dark"
              style={{ cursor: "pointer" }}
            >
              <Card className="h-100 p-2 bg-light">
                <Card.Img
                  variant="top rounded"
                  src={data.image}
                  className="position-relative"
                />
                <Card.Text className="rounded px-3 py-1 mt-2 ms-2 bg-white position-absolute top-1 start-1 ">
                  {data.amenities}
                </Card.Text>
                <Card.Body className="px-0">
                  <Card.Title className="fw-bold">
                    {data.price} / {data.rent}
                  </Card.Title>
                  <Card.Text className="fw-bold mb-0">
                    {data.property[0]} Beds, {data.property[1]} Bath,{" "}
                    {data.property[2]} sqft
                  </Card.Text>
                  <Card.Text style={{ color: "#A8A8A8" }}>
                    {data.address}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        );
      })} */}
    </Row>
  );
}

export default Content;
