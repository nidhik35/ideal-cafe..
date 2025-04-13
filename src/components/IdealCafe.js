import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, ListGroup, Image } from 'react-bootstrap';

// Import all individual food images
import margherita from '../images/pizza/margherita.jpg';
import pepperoni from '../images/pizza/pepperoni.jpg';
import vegetarian from '../images/pizza/vegetarian.jpg';

import tiramisu from '../images/desserts/tiramisu.jpg';
import chocolateLava from '../images/desserts/chocolate-lava.jpg';
import cheesecake from '../images/desserts/cheesecake.jpg';

import espresso from '../images/coffee/espresso.jpg';
import cappuccino from '../images/coffee/cappuccino.jpg';
import latte from '../images/coffee/latte.jpg';

// Icecream images
import gadbad from '../images/icecream/gadbad.jpg';
import chocolatedad from '../images/icecream/chocolatedad.jpg';
import DBC from '../images/icecream/DBC.jpg';




function IdealCafe() {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = {
    Pizza: [
      { name: 'Margherita', price: '₹199', image: margherita, description: 'Classic tomato and mozzarella' },
      { name: 'Pepperoni', price: '₹300', image: pepperoni, description: 'Spicy pepperoni with extra cheese' },
      { name: 'Vegetarian', price: '₹260', image: vegetarian, description: 'Fresh veggies on a whole wheat crust' }
    ],
    Desserts: [
      { name: 'Tiramisu', price: '₹190', image: tiramisu, description: 'Italian coffee-flavored dessert' },
      { name: 'Chocolate Lava Cake', price: '₹90', image: chocolateLava, description: 'Warm chocolate cake with molten center' },
      { name: 'Cheesecake', price: '₹100', image: cheesecake, description: 'New York style with berry topping' }
    ],
    Coffee: [
      { name: 'Espresso', price: '₹120', image: espresso, description: 'Strong black coffee' },
      { name: 'Cappuccino', price: '₹160', image: cappuccino, description: 'Espresso with steamed milk foam' },
      { name: 'Latte', price: '₹200', image: latte, description: 'Espresso with lots of steamed milk' }
    ],
    Icecream: [
      { name: 'gadbad', price: '₹160', image: gadbad, description: 'A playful medley of fruits, nuts, jelly, and ice cream stacked in sweet, colorful chaos.' },
      { name: 'chocolatedad',price:'₹120', image: chocolatedad, description: 'A decadent chocolate overload with layers of joy in every bite.' },
      { name: 'DBC', price: '₹260', image: DBC, description: 'An indulgent chocolate lover’s dream packed with brownies, fudge, ice cream, and sinful delight.' }
    ],

  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="container mt-5">
    <Card className="hero-card text-center shadow-lg p-5 animate-fade-in">
      <img src="https://tse3.mm.bing.net/th?id=OIP.2VSfGtUxNQKqFMjEWJhn8QAAAA&pid=Api&P=0&h=180" width="100" height="100" alt="Ideal Cafe Logo"  className="cafe-logo mb-4" />

      <Card.Body>
        <Card.Title as="h1" className="hero-title">
          Welcome to <span className="brand-name">Ideal Cafe</span>
        </Card.Title>
        <Card.Text className="hero-text mt-3 mb-4">
          ☕ The perfect hangout spot for 🍰 Coffee, Delicious Food & 🩷 Conversations.
        </Card.Text>
        <Button className="explore-btn px-5 py-3" onClick={toggleMenu}>
          Explore Menu
        </Button>
      </Card.Body>
    </Card>



      {showMenu && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title as="h2" className="text-center mb-4">Our Menu</Card.Title>
            
            {Object.entries(menuItems).map(([category, items]) => (
              <div key={category} className="mb-4">
                <h3 className="text-muted border-bottom pb-2">{category}</h3>
                <ListGroup variant="flush">
                  {items.map((item, index) => (
                    <ListGroup.Item key={index} className="d-flex align-items-start p-3">
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        rounded
                        thumbnail
                        className="me-3"
                        style={{ 
                          width: '100px', 
                          height: '100px', 
                          objectFit: 'cover' 
                        }}
                      />
                      <div className="flex-grow-1">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-1">{item.name}</h5>
                          <span className="badge bg-primary rounded-pill">{item.price}</span>
                        </div>
                        <p className="mb-1 text-muted">{item.description}</p>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            ))}
          </Card.Body>
        </Card>
      )}
    </div>
  );
}

export default IdealCafe;