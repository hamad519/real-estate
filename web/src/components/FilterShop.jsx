import React from 'react'
import { filterData } from '../Data/Filter.data'
const FilterShop = () => {
  return (
    <>
    {
        <div class="row container">
        {
         filterData.map((item,idx)=>{
           return <>
            <div class="col-lg-4 col-12">
             <div class="product__item">
                 <div class="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                 <img src={item.img} alt="" />
                     <ul class="product__item__pic__hover">
                         <li><a href="#"><i class="fa fa-heart"></i></a></li>
                         <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                         <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                     </ul>
                 </div>
                 <div class="product__item__text">
                     <h6><a href="#">{item.title}</a></h6>
                     <h5>{item.price}</h5>
                 </div>
             </div>
         </div>
           </>
         })
        }
     </div>
    }
    </>
  )
}

export default FilterShop