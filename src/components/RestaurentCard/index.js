import React, { useState } from "react";

import "./style.css";

import {
  Card,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Row,
  Col,
  Badge,
} from "reactstrap";
import RestaurentOutlets from "../RestaurentOutlets";

const RestaurentCard = (props) => {
  const {
    outlet,
    name,
    img_url,
    time,
    price,
    averageReview,
    pureVeg
  } = props;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row>
        <Col>
          <Card>
            <Row>
              <Col md="4">
                <CardImg top src={img_url} alt="Card image cap" />
              </Col>
              <Col md="8">
                <CardBody>
                  <CardTitle tag="h5">{name}</CardTitle>
                  <div className="sortBy">
                    <CardSubtitle tag="h6" className=" text-muted">
                      Time
                    </CardSubtitle>
                    <CardSubtitle tag="h6" className=" text-muted">
                      Price
                    </CardSubtitle>
                    <CardSubtitle tag="h6" className=" text-muted">
                      Rating
                    </CardSubtitle>
                    
                  </div>
                  <div className="sortBy">
                    <CardText tag="h6">{time}</CardText>
                    <CardText tag="h6">{price}</CardText>
                    <CardText tag="h6">
                      <Badge color="success">{averageReview} stars</Badge>
                    </CardText>
                  </div>
                  <CardSubtitle tag="h6" className=" text-muted">
                      {pureVeg?"Veg":"NonVeg"}
                    </CardSubtitle>

                  <CardLink onClick={handleShow}>Show Outlets</CardLink>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <RestaurentOutlets
     outlet={outlet}
        name={name}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};

export default RestaurentCard;
