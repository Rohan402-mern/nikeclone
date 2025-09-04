import React from 'react'
import HomeBanner from './HomeBanner'
import Head from '../Reusable/Head'

const HomeBanner2 = () => {
  return (
    <div>
        <Head title="Don't Miss" />
      <HomeBanner  bannerItem={{smallbanner:"/images/small-banner2.png", bigbanner:"/images/big-banner2.png"
        ,type1:"PRESSURE-TESTED, PRO-APPROVED.",type2:"",info:"Serve grand slam styles, inspired by tennis' bests like Aryna Sabalenka. ",
        btn:"Shop All Tennis",btnhref:"in/tennis",size:"(min-width: 960px)"}} />
    </div>
  )
}

export default HomeBanner2
