// src/pages/Shop.tsx
import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const tshirts = [
  { id: 1, name: 'Classic Tee', price: 19.99 },
  { id: 2, name: 'V-Neck Tee', price: 24.99 },
  { id: 3, name: 'Graphic Tee', price: 29.99 },
  { id: 4, name: 'Long Sleeve Tee', price: 34.99 },
  { id: 5, name: 'Pocket Tee', price: 22.99 },
  { id: 6, name: 'Striped Tee', price: 27.99 },
  { id: 7, name: 'Hooded Tee', price: 39.99 },
  { id: 8, name: 'Henley Tee', price: 25.99 },
  { id: 9, name: 'Crew Neck Tee', price: 20.99 },
  { id: 10, name: 'Raglan Tee', price: 23.99 },
];

const Shop: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <div>
      <h1>Shop</h1>
      <p>Check out our exclusive range of T-shirts!</p>
      <Row xs={1} md={2} lg={3} className="g-4">
        {tshirts.map((tshirt) => (
          <Col key={tshirt.id}>
            <Card>
              <Card.Img variant="top" src={`https://via.placeholder.com/150?text=${tshirt.name}`} alt={tshirt.name} />
              <Card.Body>
                <Card.Title>{tshirt.name}</Card.Title>
                <Card.Text>${tshirt.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => addToCart(tshirt)}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="mt-5">
        <h2>Cart</h2>
        {cart.length > 0 ? (
          <ul className='mt-5'>
            {cart.map((item) => (
              <li key={item.id} className='mt-3'>
                {item.name} - ${item.price.toFixed(2)}{' '}
                <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
