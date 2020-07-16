import React from 'react';
import './car.css';
import Product from "./Product";

const Car = ({car, addProduct}) => {
  let total = () =>{
    let calc = 0;
    car.map(product => {
      calc += product.price;
    });
    return calc;
  }

  return (
    <div className="car">
    <h2>Your Car</h2>
    {car.length === 0 
      ? 
        <p>Cart Empty</p>
      : 
        car.map(product => (
          <Product 
            key={product.id}
            product={product}
            car={car}
            addProduct={addProduct}
          />
        ))
  }
    <h3>Total: ${total()}</h3>
  </div>
  )
};
 
export default Car;