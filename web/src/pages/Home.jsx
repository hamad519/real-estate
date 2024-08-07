import React from 'react'
import HeroSection from '../components/HeroSection'
import Category from '../components/Category'
import FeaturedProduct from '../components/FeaturedProduct'
import Banner from '../components/Banner'
import BlogSection from '../components/BlogSection'
import LatestProducts from '../components/LatestProducts'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <Category/>
      <FeaturedProduct/>
      <Banner/>
      <LatestProducts/>
      <BlogSection/>
    </>
  )
}

export default Home
