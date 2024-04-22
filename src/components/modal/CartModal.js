import { useContext } from "react";
import {Button,Modal} from "react-bootstrap";
import Cart from "../cart/Cart";
import { EcomContext } from "../store/EcomContext";

const CartModal = () => {

  const {show, handleClose,setShow} = useContext(EcomContext)

  return (
    <>
      {setShow &&
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Shopping Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Cart />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Proceed to Buy</Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}

export default CartModal;
