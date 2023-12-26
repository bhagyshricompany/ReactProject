import React from "react";
import Item from "./Item";


const FoodItems = () => {
  let fooditems = ["Dal", "Salad", "Fruits", "Juice", "Milk"];

  return (
    <ul className="list-group">
      {fooditems.map((item) => (
        <Item key={item} fooditem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
