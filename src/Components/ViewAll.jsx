import React, { useState } from 'react'
import ProductNav from './ProductNav'

const ViewAll = () => {
  const [product,changeproduct]=useState(
    [
    {"name":"cetaphil","img":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1047352/ptbOgXp4wq-1047352_1.jpg","description":"Cetaphil Gentle Skin Cleanser price:250"},
    {"name":"Vaseline","img":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1111366/ucZQoExoe-1111366_1.jpg","description":"Cetaphil Gentle Skin Cleanser price:250"},
    {"name":"Foxtale","img":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1158124/UJg9Olo16e-1158124_1.jpg","description":"Cetaphil Gentle Skin Cleanser price:250"},
    {"name":"The Dermaco","img":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/resize-w:1080/1107018/-DjjeRbolc-8906087775690_1.jpg","description":"Cetaphil Gentle Skin Cleanser price:250"},
    {"name":"Dot and key","img":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1143221/IOIy0WEMcs-1143221-1.jpg","description":"dot and key Gentle face wash price:750"},
    {"name":"Toboco","img":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1156081/xy2AjUysXv-1156081_1.jpg","description":"dot and key Gentle face wash price:750"},
    {"name":"Dot and key","img":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1143221/IOIy0WEMcs-1143221-1.jpg","description":"dot and key Gentle face wash price:750"},
    {"name":"Dot and key","img":"https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1143221/IOIy0WEMcs-1143221-1.jpg","description":"dot and key Gentle face wash price:750"},
    ]
  )
  return (
    <div style={{
        backgroundImage: 'url("https://img.freepik.com/free-photo/top-view-beauty-products-with-copy-space_23-2149446515.jpg?semt=ais_hybrid&w=740")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
        <ProductNav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {product.map(
                          (value,index)=>{
                            return (
                               <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                            <div class="card" >
  <img src={value.img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.name}</h5>
    <p class="card-text">{value.description} </p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
                        </div>
                            )
                          }
                        )}
                        
                        
                        </div>
                       
                       
                       
                        
                       
                        
                        
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default ViewAll