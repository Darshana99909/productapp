import React from 'react'
import ProductNav from './ProductNav'

const SearchProduct = () => {
  return (
    <div style={{
        backgroundImage: 'url("https://thumb.photo-ac.com/e8/e85f180562d93767e4c62ef46abcba86_t.jpeg")',
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
                            <button className="btn btn-primary">search</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SearchProduct