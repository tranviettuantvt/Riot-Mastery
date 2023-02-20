import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";

import { Food } from "../context";
import { Accordion, ListGroup } from "react-bootstrap";

function CardtemDetail() {
  const { show, handleClose } = useContext(Food);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src="./img/item2.jpg" />
          <Card.Body>
            <Card.Title className="">La Sirena restaurant</Card.Title>
            <span>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </span>
            <Card.Text className="mt-3 mb-2 ">$ / La Sirena restaurant</Card.Text>
            <Card.Text className="">
              Step2: eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut
            </Card.Text>
            <hr className="my-3" />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="" >Description</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>
                      Step2: eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut{" "}
                    </li>
                    <li>
                      Step2: eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut{" "}
                    </li>
                    <li>
                      Step2: eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut{" "}
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </Modal>
    </>
  );
}

export default CardtemDetail;
