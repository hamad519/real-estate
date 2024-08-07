import React from 'react'
import AllCategory from '../components/AllCategory'
import HeroSearch from '../components/HeroSearch'
import BreadcrumbSection from '../components/BreadcrumbSection'
const HeroShop = () => {
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
      <BreadcrumbSection/>
    </>
  )
}

export default HeroShop