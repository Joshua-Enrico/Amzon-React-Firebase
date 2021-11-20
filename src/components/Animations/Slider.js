import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import '../../css/Slider.css'

function Slider() {
    const images = [
        { url: "https://m.media-amazon.com/images/I/71H5hK4wUqL._SX3000_.jpg" },
        { url: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" },
        { url: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" },
        { url: "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg" },
        { url: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" },
      ];
    return (
        <div className='home__img'>
        <SimpleImageSlider
          width={1500}
          height={500}
          images={images}
          loop={true}
          autoPlay={true}
          autoPlayDelay={4}
          showNavs={true}
        />
      </div>
    )
}

export default Slider
