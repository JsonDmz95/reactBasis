import React from 'react';


const Product = ({product, car, products, addProduct}) => {
  // Get propeties from d ebject
  const {id, name, price} = product;

  //Add product to car
  const selectProduct = id => {
    const product = products.filter(product => product.id === id)[0];
    addProduct([
      ...car,
      product
    ]);
  }

  //Remove Product from car
  const removeProduct = id => {
    const products = car.filter(product => product.id !== id);

    //Set severals prodcuts in state
    addProduct(products)
  }

  return ( 
    <div>
      <h2>{name}</h2>
      <p>${price}</p>

      {
        products ?
          <button
            type="buttom"
            onClick={() => selectProduct(id)}
          >Buy</button>
        :
          <button
            type="buttom"
            onClick={() => removeProduct(id)}
          >Remove</button>
        
      }
    </div>
   );
}
 
export default Product;