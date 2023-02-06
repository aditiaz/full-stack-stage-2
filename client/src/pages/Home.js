import React from "react";

import Sidebar from "../components/home/Sidebar";
import Content from "../components/home/Content";

import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Row className="m-0">
      <Col md={5} lg={4} className="py-3">
        <Sidebar />
      </Col>
      <Col md={7} lg={8} className="bg-light p-4 ms-auto">
        <Content />
      </Col>
    </Row>
  );
};

export default Home;
