import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { getRecipeById } from "../api/RecipeService";

import { Food } from "../context";
import { Accordion, ListGroup } from "react-bootstrap";

function CardtemDetail() {
  const { show, handleClose, ingredientActive } = useContext(Food);

  const [currentRecipe, setCurrentRecipe]=useState({})
  const getRecipeByIdd=(id) => {
    getRecipeById(id)
      .then((res) => setCurrentRecipe(res.data))
      .catch((e) => console.log(e))
  }

  useEffect(() => {
    if(ingredientActive) getRecipeByIdd(ingredientActive)
  }, [ingredientActive])

  return (
    <>
      <Modal  show={show} onHide={handleClose}>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={currentRecipe.image} />
          <Card.Body>
            <Card.Title className="">{currentRecipe.title}</Card.Title>
            <span>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </span>
            <Card.Text className="mt-3 mb-2 ">
              {currentRecipe.origin}
            </Card.Text>
            <Card.Text className="">
             {currentRecipe.material}
            </Card.Text>
          </Card.Body>
        </Card>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="">Description</Accordion.Header>
            <Accordion.Body>
              {/* <ul>
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
              </ul> */}
              {currentRecipe.step}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Modal>
    </>
  );
}

export default CardtemDetail;
