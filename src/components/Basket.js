import React from "react";
import "./Footer.css";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function Basket(props) {
    const { cartItems,onAdd,onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.description, 0);
    const shippingPrice = itemsPrice >= 150 ? 0 : 7;
    const totalPrice = itemsPrice  + shippingPrice;
  return (
    <Container style={{width:"1000px", textAlign:"center",marginTop:"50px"}}>
      <h2 style={{color:" #846339 "}}>My Cart </h2>
      <br></br>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
              
            <div className="col-3">{item.title}</div>
            <div className="col-3" >
              <Button  variant="outline-dark" onClick={() => onRemove(item)} className="remove">
              -
              </Button>{' '}
              <Button  variant="outline-dark" onClick={() => onAdd(item)} className="add">
                +
              </Button>
            </div>
            <div className="col-6 text-right">
              {item.qty} x {item.description.toFixed(2) } DT
            </div> 
          </div>
        ))}

{cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-6  text-right">Items Price</div>
              <div className="col-6 text-right">{itemsPrice.toFixed(2)} DT</div>
            </div>
            <div className="row">
              <div className="col-6">Shipping Price</div>
              <div className="col-6 text-right">
                {shippingPrice.toFixed(2)} DT
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <strong>Total Price</strong>
              </div>
              <div className="col-6 text-right">
                <strong>{totalPrice.toFixed(2)} DT</strong>
              </div>
            </div>
            <hr />
            <div>
            <Button variant="dark"  onClick={() => alert('Login please !')}>Checkout</Button>
             
            </div>
          </>
        )}
        </div>
    </Container>
  );
}

export default Basket;