import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { EcomContext} from "../store/EcomContext";

const Cart = () => {

  const { cart,quantityChangeHandler } = useContext(EcomContext);
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
        {cart?.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>
              <img src={item.imageUrl} alt="img" style={{ width: "100px" }} />
              {item.title}
            </td>
            <td>{item.price}</td>
            <td>
              <button onClick={() => quantityChangeHandler(item, -1)}>
               -
              </button>
              <button>{item.quantity}</button>
              <button onClick={() => quantityChangeHandler(item, +1)}>
                +
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Cart;
