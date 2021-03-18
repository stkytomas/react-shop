import React, {useState} from 'react';
import './App.css';

function App() {
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
            <button>ADD TO CART</button>
            </div>
      ))}
      </div>
    </div>
  );
}

export default App;
