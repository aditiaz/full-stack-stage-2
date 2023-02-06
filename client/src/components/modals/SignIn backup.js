import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SignIn(props) {
  const handleClose = () => props.setSignInShow(false);

  const navigate = useNavigate();

  const handleChangeSignIn = (e) => {
    props.setSignIn({
      ...props.signIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    localStorage.getItem("SignIn", JSON.stringify(props.signIn));

    const owner = localStorage.getItem("roles");

    const saved = JSON.parse(localStorage.getItem("SignUp"));
    if (
      saved.username === props.signIn.username &&
      saved.password === props.signIn.password &&
      owner === "Tenant"
    ) {
      navigate("/");
      alert("You are success to login");
      localStorage.setItem("SignIn", JSON.stringify(props.signIn));
      props.setSignIn(true);
    } else if (
      saved.username === props.signIn.username &&
      saved.password === props.signIn.password &&
      owner === "Owner"
    ) {
      navigate("/owner");
      alert("You are success to login");
      localStorage.setItem("SignIn", JSON.stringify(props.signIn));
      props.setSignIn(true);
    } else {
      alert("Username or Password is wrongg!!");
      props.setSignInShow(true);
    }
    // if (
    //   saved.username === props.signIn.username &&
    //   saved.password === props.signIn.password &&
    //   owner === "Tenant"
    // ) {
    //   navigate("/");
    //   alert("You are success to login");
    //   localStorage.setItem("SignIn", JSON.stringify(props.signIn));
    //   props.setSignIn(true);
    // } else {
    //   alert("Username or Password is wrongg!!");
    //   props.setSignInShow(true);
    // }
  };

  const goToSignUp = (e) => {
    props.setSignInShow(false);
    props.setSignUpShow(true);
  };

  return (
    <>
      <Modal show={props.signInShow} onHide={handleClose}>
        <Modal.Body>
          <Form className="pt-4 px-3 pb-2" onSubmit={handleSignIn}>
            <Modal.Title className="text-center fw-bold mb-5">
              Sign in
            </Modal.Title>
            <Form.Group className="mb-4" controlId="username">
              <Form.Label className="fw-bold">Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                onChange={handleChangeSignIn}
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="password">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChangeSignIn}
              />
            </Form.Group>
            <Form.Group className="d-flex gap-3 flex-column text-center">
              <Button
                variant="primary w-100"
                type="submit"
                onClick={handleClose}
              >
                Sign in
              </Button>
              <Form.Group className="d-flex justify-content-center gap-1">
                <Form.Label className="text-secondary">
                  Don't have an account? Klik
                </Form.Label>
                <Form.Label
                  onClick={goToSignUp}
                  className="text-secondary fw-bold"
                  style={{ cursor: "pointer" }}
                >
                  Here
                </Form.Label>
              </Form.Group>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignIn;
