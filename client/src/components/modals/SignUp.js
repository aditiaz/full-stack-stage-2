import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import Swal from "sweetalert2";

import { useMutation } from "react-query";
import { API } from "../../config/api";

import { useQuery } from "react-query";

function SignUp(props) {
  const handleClose = () => props.setSignUpShow(false);
  const handleShow = () => props.setSignUpShow(true);

  const [signUp, setSignUp] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    roleid: "",
    gender: "",
    phone: "",
    address: "",
  });

  const {
    fullname,
    username,
    email,
    password,
    roleid,
    gender,
    phone,
    address,
  } = signUp;

  const handleChangeSignUp = (e) => {
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  let { data: roles } = useQuery("rolesCache", async () => {
    const response = await API.get("/roles");
    // console.log(response);
    return response.data.data;
  });

  // Create function for handle insert data process with useMutation
  const handleRegister = useMutation(async (e) => {
    try {
      e.preventDefault();

      const response = await API.post("/register", {
        fullname: signUp.fullname,
        username: signUp.username,
        email: signUp.email,
        password: signUp.password,
        roleid: parseInt(signUp.roleid),
        gender: signUp.gender,
        phone: signUp.phone,
        address: signUp.address,
      });

      console.log("habis register : ", response);

      props.setSignUpShow(false);
      props.setSignInShow(true);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "User has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      signUp.fullname = "";
      signUp.username = "";
      signUp.email = "";
      signUp.password = "";
      signUp.roleid = "";
      signUp.gender = "";
      signUp.phone = "";
      signUp.address = "";
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User failed to save",
      });
      console.log(error);
    }
  });

  return (
    <>
      <Modal show={props.signUpShow} onHide={handleClose}>
        <Modal.Body>
          <Form
            className="pt-4 px-3 pb-2"
            onSubmit={(e) => handleRegister.mutate(e)}
          >
            <Modal.Title className="text-center fw-bold mb-5">
              Sign up
            </Modal.Title>
            <Form.Group className="mb-4" controlId="fullname">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                type="text"
                value={fullname}
                name="fullname"
                onChange={handleChangeSignUp}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="username">
              <Form.Label className="fw-bold">Username</Form.Label>
              <Form.Control
                type="text"
                value={username}
                name="username"
                onChange={handleChangeSignUp}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="email">
              <Form.Label className="fw-bold">Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                name="email"
                onChange={handleChangeSignUp}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                name="password"
                onChange={handleChangeSignUp}
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="roleid">
              <Form.Label className="fw-bold">List As</Form.Label>
              <Form.Select
                name="roleid"
                value={roleid}
                onChange={handleChangeSignUp}
              >
                <option>-- Pilih --</option>
                {roles?.map((item, index) => (
                  <>
                    <option value={item.id}>{item.name}</option>
                  </>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4" controlId="gender">
              <Form.Label className="fw-bold">Gender</Form.Label>
              <Form.Select
                name="gender"
                value={gender}
                onChange={handleChangeSignUp}
              >
                <option>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4" controlId="phone">
              <Form.Label className="fw-bold">Phone</Form.Label>
              <Form.Control
                type="number"
                value={phone}
                name="phone"
                onChange={handleChangeSignUp}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="address">
              <Form.Label className="fw-bold">Address</Form.Label>
              <Form.Control
                rows={4}
                as="textarea"
                value={address}
                name="address"
                onChange={handleChangeSignUp}
              />
            </Form.Group>
            <Form.Group className="d-flex gap-3 flex-column text-center">
              <Button variant="primary w-100" type="submit">
                Sign up
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

      <Button variant="light fw-bold" onClick={handleShow}>
        Sign Up
      </Button>
    </>
  );
}

export default SignUp;
