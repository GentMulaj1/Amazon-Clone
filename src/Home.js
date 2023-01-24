import React from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <>
    <Header />
    <div className='home'>
        <img className='home__image' src="https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg" alt="" />
    </div>

    <div className="home__row">
      <Product
        id="1231252"
        title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid "
        price={11.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/71bulw40DsL._AC_UY218_.jpg"
      />

      <Product
        id="9456134"
        title="Mighty Patch Original from Hero Cosmetics - Hydrocolloid Acne Pimple Patch for"
        price={12.99}
        rating={4}
        image="https://m.media-amazon.com/images/I/615258clL6L._AC_UL320_.jpg"
      />
    </div>

    <div className="home__row">
    <Product
        id="412421"
        title="Kraus KWU110-30 Kore Kitchen Single Bowl, 30 Inch, 30- Workstation Sink"
        price={367.32}
        rating={5}
        image="https://m.media-amazon.com/images/I/612mjsUBFWL._AC_UL320_.jpg"
      />

      <Product
        id="531515"
        title="Superior Glass Oil and Vinegar Dispenser,Measuring Oil Pourer for Kitchen,Wide Opening for Easy Refill and "
        price={14.51}
        rating={3}
        image="https://m.media-amazon.com/images/I/51Hh5ZkVxDS._AC_UL320_.jpg"
      />

      <Product
        id="6133542"
        title="Kitsure Dish Drying Rack -Multifunctional Dish Rack, Rustproof Kitchen Dish Drying Rack with Drainboard &"
        price={39.99}
        rating={5}
        image="https://m.media-amazon.com/images/I/714poSB2rQL._AC_UL320_.jpg"
      />
    </div>

    <div className="home__row">
      <Product
        id="3211421"
        title="ProsourceFit Acupressure Mat and Pillow Set for Back/Neck Pain Relief and Muscle Relaxation"
        price={29.93}
        rating={4}
        image="https://m.media-amazon.com/images/I/81sysdEM3nL._AC_UL320_.jpg"
      />
    </div>


    </>
  )
}

export default Home