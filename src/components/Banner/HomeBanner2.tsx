import React, { useEffect, useState } from 'react'
import HomeBanner from './HomeBanner'
import Head from '../Reusable/Head'

type BannerType = {

  bannerNo?: string;
  smallbanner: string;
  bigbanner: string;
  title?: string;
  type1: string;
  type2?: string;
  info: string;
  btn: string;
  btnhref: string;
  size: string;
}

const HomeBanner2 = () => {
  const [bannerItem, setBannerItem] = useState<BannerType | null>(null)
  useEffect(() => {
      const fetchBanner = async () => {
        const res = await fetch('http://localhost:8080/nike/banner/124')
        const data = await res.json()
  
        const formattedData: BannerType = {
          bannerNo: data._id,
          smallbanner: data.smallbanner,
          bigbanner: data.bigbanner,
          title: data.title,
          type1: data.type1,
          type2: data.type2,
          info: data.info,
          btn: data.btn,
          btnhref: data.btnhref,
          size: data.size,
        }
  
        setBannerItem(formattedData)
      }
  
      fetchBanner()
    }, [])
  return (
    <div>
        <Head title="Don't Miss" />
      {bannerItem && <HomeBanner  bannerItem={bannerItem} />}
    </div>
  )
}

export default HomeBanner2
