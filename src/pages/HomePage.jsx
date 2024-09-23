import React from 'react'
import Hero from '../components/HomePage/Hero'
import About from '../components/HomePage/About'
import Product from '../components/HomePage/Product'
import Booking from '../components/HomePage/Booking'
import Donations from '../components/HomePage/Donations'
import KidsCorner from '../components/HomePage/KidsCorner'
import Recipes from '../components/HomePage/Recipes' 
import Notifications from '../components/HomePage/Notifications'

const Homepage = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Product/>
      <Booking/>
      <Donations/>
      <KidsCorner/>
      <Recipes/>
      <Notifications/>
    </>
  )
}

export default Homepage
