import React from "react";
import CardItem from "./CardItem";

function CardItemList() {
  return (
    <div className="container my-5">
      <div className="itemList-title text-center mb-5">
        <h4 className="text-success mb-1">Our Dishes</h4>
        <h2 style={{color: "#022559"}}>Popular Dishes</h2>
      </div>
      <div className="row gy-4">
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />

      </div>
    </div>
  );
}

export default CardItemList;
