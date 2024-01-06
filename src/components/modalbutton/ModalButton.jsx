import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./ModalButton.scss";

function AddButton({ handleAddUser, handlePreview, preview }) {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({
    id: "",
    name: "",
    age: "",
    email: "",
    status: "",
    file: null,
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    if (e.target.name === "file") {
      const file = e.target.files[0];
      if (file) {
        setUser((prevState) => ({
          ...prevState,
          file: file,
        }));
        handlePreview(URL.createObjectURL(file));
      } else {
        setUser((prevState) => ({
          ...prevState,
          file: null,
        }));
        handlePreview(null);
      }
    } else {
      const { name, value } = e.target;
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...user,
      id: new Date().getTime().toString(),
    };
    handleAddUser(newUser);
    handleClose();
    setUser((prevState) => ({
      ...prevState,
      name: "",
    }));
  };

  return (
    <>
      <Button className="my-3 addButton" onClick={handleShow}>
        Add User
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label htmlFor="file" className="d-block">
                Image
              </Form.Label>
              {user.preview && (
                <img src={user.preview} alt="Preview" className="img-preview" />
              )}
              <Form.Control
                className="mb-4"
                type="file"
                name="file"
                id="file"
                autoFocus
                onChange={handleChange}
              />

              <Form.Control
                className="my-4"
                type="text"
                placeholder="User Name"
                name="name"
                id="name"
                autoFocus
                value={user.name}
                onChange={handleChange}
              />

              <Form.Control
                className="my-4"
                type="text"
                placeholder="User Age"
                name="age"
                id="age"
                autoFocus
                value={user.age}
                onChange={handleChange}
              />

              <Form.Control
                className="my-4"
                type="email"
                placeholder="name@example.com"
                name="email"
                id="email"
                autoFocus
                value={user.email}
                onChange={handleChange}
              />

              <Form.Select
                aria-label="Default select example"
                className="w-25 my-4"
                name="status"
                id="status"
                value={user.status}
                onChange={handleChange}
              >
                <option disabled value="">
                  Select status
                </option>
                <option value="active">Active</option>
                <option value="passive">Passive</option>
                <option value="pending">Pending</option>
              </Form.Select>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddButton;
