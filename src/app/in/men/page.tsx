import MenBanner from '@/components/Banner/BtnBanner'
import CategoryHead from '@/components/Reusable/CategoryHead'
import React from 'react'

const page = () => {
  return (
    <div>
      <CategoryHead title='Men' list={["Shoes", "Clothing", "Gear"]} />
      <MenBanner/>
    </div>
  )
}

export default page
