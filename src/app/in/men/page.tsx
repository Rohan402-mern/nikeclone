import BtnBanner from '@/components/Banner/BtnBanner'
import Marathon from '@/components/Marathon'
import MenFeatured from '@/components/MenFeatured'
import CategoryHead from '@/components/Reusable/CategoryHead'
import SportSlider from '@/components/SportSlider'
import React from 'react'

const page = () => {
  return (
    <div>
      <CategoryHead title='Men' list={["Shoes", "Clothing", "Gear"]} />
      <BtnBanner/>
      <MenFeatured/>
      <Marathon/>
      <SportSlider/>
    </div>
  )
}

export default page
