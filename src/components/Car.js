import React from 'react';
import './car.css';
import Product from "./Product";

const Car = ({car}) =>  (
  <div className="car">
    <h2>Your Car</h2>
    {car.map(product => (
      <Product 
        key={product.id}
        product={product}
      />
    ))}
  </div>
);
 
export default Car;