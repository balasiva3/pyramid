import React from "react";
import { Card, CardText } from "reactstrap";
import "./style.css";
const RestaurentFilters = ({ size }) => {
  return (
    <Card>
      <div className="sortBy">
        <CardText>{size} Restaurants</CardText>
        <CardText>Relavance</CardText>
        <CardText>Filter</CardText>
      </div>
    </Card>
  );
};

export default RestaurentFilters;
