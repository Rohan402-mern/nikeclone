"use client"
import HomeBanner from '@/components/Banner/HomeBanner'
import HomeBanner2 from '@/components/Banner/HomeBanner2'
import HomeBanner3 from '@/components/Banner/HomeBanner3'
import HomeSlider from '@/components/HomeSlider'
import Marathon from '@/components/Marathon'
import ShopBySport from '@/components/ShopBySport'
import React, { useEffect, useState } from 'react'

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

const Page = () => {
  const [bannerItem, setBannerItem] = useState<BannerType | null>(null)

  useEffect(() => {
    const fetchBanner = async () => {
      const res = await fetch('http://localhost:8080/nike/banner/123')
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
  
console.log(bannerItem)
  return (
    <div>
      {bannerItem && <HomeBanner bannerItem={bannerItem} />}
      <ShopBySport/>
      <HomeBanner3 />
      <HomeBanner2 />
      <Marathon/>
    </div>
  )
}

export default Page
