import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import DishCard from '../components/DishCard';
import TestimonialCard from '../components/TestimonialCard';
import OfferCard from '../components/OfferCard';

const Home = () => {
  return (
    <div>
      {/* Hero Banner Carousel */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="assets/gadbad.jpg/" alt="Ice Cream " />
          <Carousel.Caption>
            <h3>Award Winning Ice Creams</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src="assets/images/ice2.jpg" alt="Ice Cream 2" />
          <Carousel.Caption>
            <h3>Gadbad Special</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Popular Dishes */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Popular Dishes</h2>
        <Row>
          <Col><DishCard name="Gadbad" desc="Special Layered Ice Cream" price="120" image="assets/images/gadbad.jpg" /></Col>
          <Col><DishCard name="Dry Fruit Sundae" desc="Loaded with nuts!" price="140" image="assets/images/sundae.jpg" /></Col>
        </Row>
      </Container>

      {/* Testimonials */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Customer Testimonials</h2>
        <Row>
          <Col><TestimonialCard user="Anita" review="Best Ice Cream in Mangalore!" rating={5} /></Col>
          <Col><TestimonialCard user="Ravi" review="Loved the ambience & taste." rating={4} /></Col>
        </Row>
      </Container>

      {/* Exclusive Offers */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Exclusive Offers</h2>
        <Row>
          <Col><OfferCard offer="Happy Hour: 20% Off 4PM-6PM" /></Col>
          <Col><OfferCard offer="Summer Specials Available Now!" /></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;