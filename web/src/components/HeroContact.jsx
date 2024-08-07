import React from 'react'
import AllCategory from '../components/AllCategory'
import HeroSearch from '../components/HeroSearch'
import BreadcrumbContact from './BreadcrumbContact'

const HeroContact = () => {
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
      <BreadcrumbContact/>
    </>
  )
}

export default HeroContact