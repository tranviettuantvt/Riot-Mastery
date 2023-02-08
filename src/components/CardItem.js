import React from "react";

function CardItem() {
  return (
    <div class="col-lg-4">
      <div className="card">
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
      </div>
    </div>
  );
}

export default CardItem;
