import React from "react";

const List = props => (
  <ul className="list-group">
    {props.groceries.map((item) => 
      <li>{item.name}</li>)}
    {/* Using the map method, render one li element displaying the text property of
    each grocery object. */}
  </ul>
);

export default List;