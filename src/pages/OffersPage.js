import React from 'react';
import { Container } from 'react-bootstrap';

const OffersPage = () => {
  return (
    <Container className="my-5 text-center">
      <h2>Special Offers</h2>
      <p>Enjoy seasonal discounts, Happy Hours, and much more!</p>
      <img src="assets/images/offers.jpg" alt="Offers" className="img-fluid" />
    </Container>
  );
};

export default OffersPage;