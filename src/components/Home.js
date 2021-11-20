import React from 'react'
import "../css/Home.css"
import Product from './Product'
import Slider from './Animations/Slider'
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  return (
<div className="home">
        <div className="home_container">
          <Slider className='home__img' />
          <div className="home__row">
            <Product
              id="12321341"
              title="Modem"
              price={29.99}
              image="https://m.media-amazon.com/images/I/61kWiPNriNL._AC_UY218_.jpg"
              rating={5}
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              image="https://m.media-amazon.com/images/I/81O%2BGNdkzKL._AC_UY218_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product 
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/71Swqqe7XAL._AC_UY218_.jpg"
             />
            <Product 
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg"
            />
            <Product 
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/816ctt5WV5L._AC_UY218_.jpg"
            />
          </div>
          <div className="home__row">
            <Product 
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/6125mFrzr6L._AC_UY218_.jpg"
            />
          </div>
        </div>
      </div>
  )
}

export default Home
