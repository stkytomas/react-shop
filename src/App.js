import React, {useState} from 'react';
import './App.css';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState ([]); //cart for products to be pushed to
  const [page, setPage] = useState(PAGE_PRODUCTS); //page for viewing cart
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
  const navigateTo = (cartPage) => {
    setPage(cartPage);
  }

  const renderProducts = () => ( //returns some JSX
    <>
    <h1>Resin Products</h1>
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
    {products.map((product, index) => ( //uses .map to iterate through product array and get info for each product
      <div className="product" key={index}>
        <h3>{product.name}</h3>
          <h4>{product.cost}</h4>
          <img src={product.image} alt={product.name}/>
          <br></br>
          {/* <button onClick={() => addToCart(product)}>
            Add to Cart
            </button> */}
          </div>
        ))}
      </div>
    </>
  )

  return (
    <div className="App">
      <header>
        <button onClick ={() => navigateTo(PAGE_CART)}>View Cart ({cart.length})</button>
      </header>
      {page === PAGE_PRODUCTS && renderProducts()}
      {page === PAGE_CART && renderCart()}
    </div>
  );
}

export default App;
