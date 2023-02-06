import React, { useState } from "react";
import { Button, Container, Form, Image } from "react-bootstrap";

import Swal from "sweetalert2";

import { useMutation } from "react-query";
import { API } from "../../config/api";

function AddProperty() {
  const [preview, setPreview] = useState(null); //For image preview
  const [addProperty, setAddProperty] = useState({
    image: "",
    name: "",
    cityid: "",
    address: "",
    price: "",
    rent: "",
    ameneties: "",
    bedroom: "",
    bathroom: "",
    sqf: "",
    description: "",
  });

  const handleChangeAddProperty = (e) => {
    setAddProperty({
      ...addProperty,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      console.log("blob image", url);
      setPreview(url);
    }

    console.log(e.target.name, e.target.value);
    // console.log(e.target.files[0]);
  };

  const handleAddProperty = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.append("image", addProperty.image[0]);
      formData.append("name", addProperty.name);
      formData.append("cityid", addProperty.cityid);
      formData.append("address", addProperty.address);
      formData.append("price", addProperty.price);
      formData.append("rent", addProperty.rent);
      formData.append("ameneties", addProperty.ameneties);
      formData.append("bedroom", addProperty.bedroom);
      formData.append("bathroom", addProperty.bathroom);
      formData.append("sqf", addProperty.sqf);
      formData.append("description", addProperty.description);

      const response = await API.post("/house", formData);
      console.log("berhasil menambahkan house", response);

      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Property has been saved",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Property failed to save",
      });
      console.log(error);
    }
  });

  return (
    <div className="bg-light py-5">
      <Container>
        <h2 className="mb-3">Add Property</h2>
        <Form onSubmit={(e) => handleAddProperty.mutate(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Image Property</Form.Label>
            {preview && (
              <Image
                src={preview}
                style={{
                  maxWidth: "150px",
                  maxHeight: "150px",
                  objectFit: "cover",
                }}
              />
            )}
            <Form.Control
              type="file"
              id="upload"
              name="image"
              onChange={handleChangeAddProperty}
              required
            />
            <Form.Label>Image Property</Form.Label>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name Property</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={addProperty.name}
              onChange={handleChangeAddProperty}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="cityid"
              value={addProperty.cityid}
              onChange={handleChangeAddProperty}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Address</Form.Label>
            <Form.Control
              rows={4}
              as="textarea"
              name="address"
              value={addProperty.address}
              onChange={handleChangeAddProperty}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={addProperty.price}
              onChange={handleChangeAddProperty}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Type of Rent</Form.Label>
            <Form.Select
              name="rent"
              value={addProperty.rent}
              onChange={handleChangeAddProperty}
              required
            >
              <option>-- Pilih --</option>
              <option value="day">Day</option>
              <option value="month">Month</option>
              <option value="year">Year</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Ameneties</Form.Label>
            <Form.Select
              name="ameneties"
              value={addProperty.ameneties}
              onChange={handleChangeAddProperty}
              required
            >
              <option>-- Pilih --</option>
              <option value="Furnished">Furnished</option>
              <option value="Pet Allowed">Pet Allowed</option>
              <option value="Shared Accomodation">Shared Accomodation</option>
            </Form.Select>
          </Form.Group>

          {/* <Form.Label className="fw-bold">Ameneties</Form.Label>
          <Form.Group
            className="mb-3 d-flex gap-5"
            controlId="formBasicCheckbox"
          >
            <Form.Check
              type="checkbox"
              name="ameneties"
              value={ameneties}
              onChange={handleChangeAddProperty}
              label="Furnished"
            />
            <Form.Check
              type="checkbox"
              // name="ameneties"
              // value={ameneties}
              onChange={handleChangeAddProperty}
              label="Pet Allowed"
            />
            <Form.Check
              type="checkbox"
              // name="ameneties"
              // value={ameneties}
              onChange={handleChangeAddProperty}
              label="Shared Accomodation"
            />
          </Form.Group> */}

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Bedroom</Form.Label>
            <Form.Select
              name="bedroom"
              value={addProperty.bedroom}
              onChange={handleChangeAddProperty}
              required
            >
              <option>-- Pilih --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">Bathroom</Form.Label>
            <Form.Select
              name="bathroom"
              value={addProperty.bathroom}
              onChange={handleChangeAddProperty}
              required
            >
              <option>-- Pilih --</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-bold">SQF</Form.Label>
            <Form.Control
              type="text"
              name="sqf"
              value={addProperty.sqf}
              onChange={handleChangeAddProperty}
              required
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label className="fw-bold">Description</Form.Label>
            <Form.Control
              rows={4}
              as="textarea"
              name="description"
              value={addProperty.description}
              onChange={handleChangeAddProperty}
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 d-flex justify-content-center"
            controlId="button"
          >
            <Button
              variant="primary"
              type="submit"
              style={{ width: "300px", height: "50px" }}
            >
              Save
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
}

export default AddProperty;
