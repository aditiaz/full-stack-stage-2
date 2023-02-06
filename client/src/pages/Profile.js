import React from "react";
import { Button, Card, Container, Image } from "react-bootstrap";

import jwt from "jwt-decode";

import ModalChangePassword from "../components/modals/ModalChangePassword";

import PhotoTenant from "../assets/tenant.jpg";
import PhotoOwner from "../assets/owner.png";
import IconProfile from "../assets/icons/IconProfile.png";
import IconEnvelope from "../assets/icons/IconEnvelope.png";
import IconLock from "../assets/icons/IconLock.png";
import IconHome from "../assets/icons/IconHome.png";
import IconGender from "../assets/icons/IconGender.png";
import IconPhone from "../assets/icons/IconPhone.png";
import IconLocation from "../assets/icons/IconLocation.png";

import { useQuery } from "react-query";
import { API } from "../config/api";

const styles = {
  Cursor: {
    cursor: "pointer",
  },
};

const Profile = () => {
  const [modalShow, setModalShow] = React.useState(false);

  const getToken = localStorage.getItem("token");

  const hasilDecode = jwt(getToken);

  // console.log(hasilDecode.id);

  // Fetching data from database
  const { data: user } = useQuery("userCache", async () => {
    const response = await API.get("/user/" + hasilDecode.id);
    console.log("ini response nyaa", response);
    return response.data.data;
  });

  console.log("ini data usernya", user);
  return (
    <div className="bg-light py-5">
      <Container className="d-flex justify-content-center">
        <Card className="w-75">
          <Card.Body className="d-flex justify-content-between p-4">
            <div className="d-flex flex-column gap-4">
              <h4>Personal Info</h4>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconProfile} />
                </div>
                <div>
                  <Card.Title>{user?.fullname}</Card.Title>
                  <Card.Text className="text-secondary">Full name</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconEnvelope} />
                </div>
                <div>
                  <Card.Title>{user?.email}</Card.Title>
                  <Card.Text className="text-secondary">Email</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconLock} />
                </div>
                <div>
                  <Card.Title style={styles.Cursor}>
                    <Card.Link
                      className="text-primary text-decoration-none"
                      onClick={() => setModalShow(true)}
                    >
                      Change Password
                    </Card.Link>
                    <ModalChangePassword
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                    />
                  </Card.Title>
                  <Card.Text className="text-secondary">Password</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconHome} />
                </div>
                <div>
                  <Card.Title>{user?.role.name}</Card.Title>
                  <Card.Text className="text-secondary">Status</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconGender} />
                </div>
                <div>
                  <Card.Title>{user?.gender}</Card.Title>
                  <Card.Text className="text-secondary">Gender</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconPhone} />
                </div>
                <div>
                  <Card.Title>{user?.phone}</Card.Title>
                  <Card.Text className="text-secondary">Mobile phone</Card.Text>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="me-3">
                  <Image src={IconLocation} />
                </div>
                <div>
                  <Card.Title>{user?.address}</Card.Title>
                  <Card.Text className="text-secondary">Address</Card.Text>
                </div>
              </div>
            </div>
            <div>
              <Card style={{ width: "18rem" }}>
                {localStorage.getItem("role") === "Tenant" ? (
                  <Card.Img variant="top" src={PhotoTenant} />
                ) : (
                  <Card.Img
                    variant="top"
                    style={{
                      maxWidth: "18rem",
                      minHeight: "18rem",
                      objectFit: "cover",
                    }}
                    src={PhotoOwner}
                  />
                )}
              </Card>
              <Button className="btn btn-primary mt-2 w-100">
                Change Photo Profile
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;
