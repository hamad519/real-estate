import React from 'react'
import Sidebar from '../components/Sidebar.Shop'
import SaleOffCarousel from '../components/SaleOffCarousel'
import FilterShop from '../components/FilterShop'
import HeroShop from '../components/Hero.Shop'
import FilterItemShop from '../components/FilterItem.Shop'
const Shop = () => {
  return (
    <>
  <HeroShop/>
    <section class="product spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-5">
                    <Sidebar/>
                </div>
                <div class="col-lg-9 col-md-7">
                    <div class="product__discount">
                        <div class="section-title product__discount__title">
                            <h2>Sale Off</h2>
                        </div>
                       <SaleOffCarousel/>
                    </div>
                    <FilterItemShop/>
                    <FilterShop/>
                    <div class="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default Shop