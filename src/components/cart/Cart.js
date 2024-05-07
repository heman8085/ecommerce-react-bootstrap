import React, { useContext ,useState,useEffect} from "react";
import { Table } from "react-bootstrap";
import { EcomContext } from "../store/EcomContext";

const Cart = () => {
  const { cart, quantityChangeHandler } = useContext(EcomContext);
  const [price, setPrice] = useState(0);

useEffect(() => {
  handlePrice();
});

const handlePrice = () => {
  let totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  setPrice(totalPrice);
};

  return (
    <div className="table-responsive">
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
              <td>$ {item.price}</td>
              <td>
                <button onClick={() => quantityChangeHandler(item, -1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => quantityChangeHandler(item, +1)}>
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
        <span>Total Amount: </span>
        <span>$ {price}</span>
      </div>
    </div>
  );
};

export default Cart;


  