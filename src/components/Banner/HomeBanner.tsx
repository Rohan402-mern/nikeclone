import React from 'react'
import styles from "@/styles/HomeBanner.module.css"
import NikeBtn from '../Reusable/NikeBtn'

type BannerType={
    smallbanner:string;
    bigbanner:string;
    title?:string;
    type1:string;
    type2?:string;
    info:string;
    btn:string;
    btnhref:string;
    size:string;
}

const HomeBanner = ({bannerItem}:{ bannerItem: BannerType }) => {
  return (
    <div className={styles['homebanner']}>
     <picture className={styles['homebanner-picture']}>
      <source media={bannerItem.size} srcSet={bannerItem.bigbanner} />
      <img src={bannerItem.smallbanner} alt="banner_image" />
    </picture>
    <div className={styles['homebanner-info']}>
        <p>{bannerItem.title}</p>
        <h1>{bannerItem.type1} <br /> {bannerItem.type2}</h1>
        <p>{bannerItem.info}.</p>
        <NikeBtn style='nikebtndark' href='in/sabrina' title={bannerItem.btn} />
    </div>
    </div>
  )
}

export default HomeBanner
