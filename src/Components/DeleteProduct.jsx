import React from 'react'
import ProductNav from './ProductNav'

const DeleteProduct = () => {
  return (
    <div style={{
        backgroundImage: 'url("https://st.depositphotos.com/6530696/61489/i/450/depositphotos_614896114-stock-photo-cosmetic-skin-care-products-flowers.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <ProductNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="bg-light p-4 rounded shadow">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">product name</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-danger">delete</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteProduct