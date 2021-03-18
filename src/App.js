import React, {useState} from 'react';
import './App.css';

function App() {
  const [cart, setCart] = useState ([]); //cart for products to be pushed to
  const [products] = useState([ //uses state to loop over info from product array
    {
      name: "Sakura Tray | Pink + Blank",
      cost: "$12",
      image: "https://i.etsystatic.com/24985667/r/il/755173/2804024067/il_794xN.2804024067_5rt2.jpg"
    },
    {
      name: "Sakura Tray | Purple + Rainbow Holo Kuromi",
      cost: "$15",
      image: "https://i.etsystatic.com/12775544/r/il/32c88d/2829613274/il_794xN.2829613274_ktcv.jpg"
    }
  ])

  const addToCart = (product) => { //function takes in product as arg, adds product to cart array when button is clicked
    setCart([...cart, product]); //uses array destructuring to append the product to the existing cart
  };

  return (
    <div className="App">
      <h1>Resin Products</h1>
      <div className="products">
      {products.map((product, index) => ( //uses .map to iterate through product array and get info for each product
        <div className="product" key={index}>
          <h3>{product.name}</h3>
            <h4>{product.cost}</h4>
            <img src={product.image} alt={product.name}/>
            <br></br>
            <button onClick={() => addToCart(product)}>
              ADD TO CART
              </button>
            </div>
      ))}
      </div>
    </div>
  );
}

export default App;
