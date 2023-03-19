import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import { Food } from "../context";
import CardtemDetail from "./CardtemDetail";


function CardItem({title, image, material, ingredient_id}) {
  const {handleShow}=useContext(Food)

  return (
    <div class="col-lg-4" style={{marginTop:"3rem"}}>
      <div className="card position-relative card-item">
        <div className="img-item p-3">
          <img src={image} class="card-img-top rounded" alt="..." style={{height:"15rem"}}/>
        </div>
        <div class="card-body text-center">
          <h5 class="card-title text-success">{title}</h5>
          <p class="card-text">
            {material}
          </p>
          <a href="#" class="btn btn-success">
            Contact with Contributor
          </a>
        </div>
        {/* <Button style={{display:"none"}} className="eye-item" variant="primary" onClick={handleShow}>
          <i class="fa-solid fa-eye"></i>
        </Button> */}
        <button className="eye-item" href="" onClick={()=>handleShow(ingredient_id)}><i class="fa-solid fa-eye"></i></button>
        <a className="favourite-item" ><i class="fa-sharp fa-solid fa-heart"></i></a>
      </div>

    </div>
  );
}

export default CardItem;
