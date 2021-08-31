import { ListGroup, Button, Modal, Badge } from "react-bootstrap";
import React from "react";
import "./style.css";
const RestaurentOutlets = (props) => {
  const { handleClose, outlet,name,show } = props;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {outlet &&
          outlet.length &&
          outlet.map((entry) => {
            return (
              <ListGroup key={entry.outletId} variant="flush">
                <ListGroup.Item>
                  {entry.outletName}
                  {entry.isServicable === 0 && (
                    <span >
                      <Badge variant="success">Available</Badge>
                    </span>
                  )}
                  {entry.displayCostForTwo}
                </ListGroup.Item>
              </ListGroup>
            );
          })}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RestaurentOutlets;
