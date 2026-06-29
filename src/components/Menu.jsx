import React from 'react';
import steak from '../assets/steak.jpg';
import pasta from '../assets/pasta.jpg';
import pizza from '../assets/pizza.jpg';
import burger from '../assets/burger.jpg';
import salad from '../assets/salad.jpg';
import dessert from '../assets/dessert.jpg';
import './Menu.css';

const menuItems = [
  { name: 'Grilled Steak', price: '$32', img: steak },
  { name: 'Truffle Pasta', price: '$24', img: pasta },
  { name: 'Margherita Pizza', price: '$18', img: pizza },
  { name: 'Classic Burger', price: '$16', img: burger },
  { name: 'Fresh Salad', price: '$14', img: salad },
  { name: 'Chocolate Lava Cake', price: '$10', img: dessert },
];

function Menu() {
  return (
    <section id="menu" className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;