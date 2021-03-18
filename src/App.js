import React, {useState} from 'react';
import './App.css';

//NEEDS CLEANING
import logo from './images/logo.png';
import item1 from './images/sakurapastelpinkblank.jpg';
import item2 from './images/sakuratraykuromipurple.jpg';
import item3 from './images/darkflowerpurple.jpg'
import item4 from './images/mandalalotus.jpg'
import item5 from './images/pastelpurpleluna.jpg'
import item6 from './images/pastelpinkmonsterra.jpg'
import item7 from './images/pastelpurpled20white.jpg'
import item8 from './images/rainbowandretroround.jpg'

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState ([]); //cart for products to be pushed to
  const [page, setPage] = useState(PAGE_PRODUCTS); //page for viewing cart

  //NEEDS CLEANING
  const [products] = useState([ //uses state to loop over info from product array
    {
      name: "Sakura Tray | Pink",
      cost: "$12",
      image: (item1)
    },
    {
      name: "Sakura Tray | Purple + Rainbow Holo Kuromi",
      cost: "$15",
      image: (item2)
    },
    {
      name: "Flower Tray | Black + Gold Flakes",
      cost: "$20",
      image: (item3)
    },
    {
      name: "Mandala Lotus Coaster | Clear + Iridescent Flakes",
      cost: "$12",
      image: (item4)
    },
    {
      name: "Luna Cat Earrings | Translucent Purple",
      cost: "$6",
      image: (item5)
    },
    {
      name: "Monstera Earrings | Pastel Pink",
      cost: "$6",
      image: (item6)
    },
    {
      name: "D20 Phone Grip | Pastel Purple + White",
      cost: "$6",
      image: (item7)
    },
    {
      name: "Miscellaneous Phone Grip | 2 pack",
      cost: "$6",
      image: (item8)
    }
  ])

  const addToCart = (product) => { //function takes in product as arg, adds product to cart array when button is clicked
    setCart([...cart, {...product}]); //uses array destructuring to append the product to the existing cart
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter(product => product !== productToRemove)) //filters out any product !== productToRemove
  };

  const navigateTo = (cartPage) => {
    setPage(cartPage);
  };

  const renderProducts = () => ( //returns some JSX
    <>
    <h1>In Stock Products</h1>
    <div className="products">
    {products.map((product, index) => ( //uses .map to iterate through product array and get info for each product
      <div className="product" key={index}>
        <h3>{product.name}</h3>
          <h4>{product.cost}</h4>
          <img src={product.image} alt={product.name}/>
          <br></br>
          <button onClick={() => addToCart(product)}>
            Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const renderCart = () => (
    <>
    <h1>Cart</h1>
    <div className="products">
    {cart.map((product, index) => ( //uses .map to iterate through product array and get info for each product
      <div className="product" key={index}>
        <h3>{product.name}</h3>
          <h4>{product.cost}</h4>
          <img src={product.image} alt={product.name}/>
          <br></br>
          <button onClick={() => removeFromCart(product)}>
            Remove
            </button>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="App">
      <h1 className="shopname">Resin, Dice and Everything Nice</h1>
      <header>
        <button className="button2" onClick ={() => navigateTo(PAGE_CART)}>View Cart ({cart.length})</button>
        <img className="shoplogo" src={logo} alt="logo"/>
        <button className="button2" onClick ={() => navigateTo(PAGE_PRODUCTS)}>Home</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
