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

  return ( 
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <button
        type="buttom"
        onClick={() => selectProduct(id)}
      >Comprar</button>
    
    </div>
   );
}
 
export default Product;