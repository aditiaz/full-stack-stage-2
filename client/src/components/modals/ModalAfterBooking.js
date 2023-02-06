import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function ModalAfterBooking() {
  const { id } = useParams();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="mt-4"
        style={{
          backgroundColor: "#5A57AB",
          borderColor: "#5A57AB",
          fontSize: "18px",
          fontWeight: "700",
          color: "#FFFFFF",
          width: "213px",
          height: "50px",
        }}
        onClick={handleShow}
      >
        PAY
      </Button>
      <Modal size="lg" show={show} centered onHide={handleClose}>
        <Modal.Body className="text-center">
          <Modal.Title>
            Pembayaran Anda Akan di Konfirmasi dalam 1 x 24 Jam
          </Modal.Title>
          <Modal.Title>
            Untuk melihat pesanan Klik
            <Link to={`/booking-pending/${id}`}>
              <div> Disini</div>
            </Link>
            Terimakasih
          </Modal.Title>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalAfterBooking;
