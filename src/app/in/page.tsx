import HomeBanner from '@/components/Banner/HomeBanner'
import HomeBanner2 from '@/components/Banner/HomeBanner2'
import HomeBanner3 from '@/components/Banner/HomeBanner3'
import React from 'react'

const page = () => {
  return (
    <div>
      <HomeBanner 
      bannerItem={{smallbanner:"/images/small-banner.png", bigbanner:"/images/big-banner.png",title:"Sabrina 3"
        ,type1:"THE HOOPERS ",type2:"BLUEPRINT",info:"Build your game like the best in Sabrina's latest collection.",
        btn:"Shop",btnhref:"in/sabrina",size:"(min-width: 960px)"}}
       />
       <HomeBanner3/>
       <HomeBanner2/>
    </div>
  )
}

export default page
