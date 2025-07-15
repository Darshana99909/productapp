import React from 'react'
import ProductNav from './ProductNav'

const Home = () => {
  return (
    <div style={{
        backgroundImage: 'url("https://st.depositphotos.com/6530696/61489/i/450/depositphotos_614896114-stock-photo-cosmetic-skin-care-products-flowers.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <ProductNav/>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                         <div className="col-12 text-center">
                    <div className="row justify-content-center">
                        <h1>Welcome to Serene </h1>
                        <h3>Where Your Skin Finds Its True Glow</h3>
                </div>
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home