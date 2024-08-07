import React from 'react'
import AllCategory from '../components/AllCategory'
import HeroSearch from '../components/HeroSearch'
import BreadcrumbCheckout from './BreadcrumbCheckout'

const HeroCheckout = () => {
  return (
    <>
     <section className="hero">
        <div className="container">
          <div className="row">
            <AllCategory />
            <div className="col-lg-9">
              <HeroSearch />
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbCheckout/>
    </>
  )
}

export default HeroCheckout