import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Car from "./components/Car";

function App() {
  // Create product list
  const [products, setProducts] = useState([
    { id: 1, name: "ReactJS Shirts", price: 50 },
    { id: 2, name: "VueJS Shirts", price: 40 },
    { id: 3, name: "NodeJs Shirts", price: 30 },
    { id: 4, name: "Angular Shirts", price: 20 },
  ]);

  //Shoping car state
  const [car, addProduct] = useState([]);

  // get date
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header text="E-commerce Demo" />

      <h1>Product List</h1>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          car={car}
          products={products}
          addProduct={addProduct}
        />
      ))}

      <Car car={car}/>

      <Footer date={date} />
    </Fragment>
  );
}

export default App;
