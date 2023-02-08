import React from "react";

function CardItem() {
  return (
    <div class="col-lg-4">
      <div className="card position-relative card-item">
        <div className="img-item p-3">
          <img src="./img/item2.jpg" class="card-img-top rounded" alt="..." />
        </div>
        <div class="card-body text-center">
          <h5 class="card-title text-success">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-success">
            Contact with Contributor
          </a>
        </div>
        <a className="eye-item" href=""><i class="fa-solid fa-eye"></i></a>
        <a className="favourite-item" href=""><i class="fa-sharp fa-solid fa-heart"></i></a>
      </div>

    </div>
  );
}

export default CardItem;
