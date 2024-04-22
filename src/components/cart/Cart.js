import React from "react";
import { Table } from "react-bootstrap";
import CartData from "./CartData";

const Cart = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {CartData.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              <img src={item.imageUrl} alt="img" style={{ width: "100px" }} />
              {item.title}
            </td>
            <td>{item.price}</td>
            <td>{item.quantity}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Cart;
