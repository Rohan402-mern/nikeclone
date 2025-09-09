import React from 'react'
import styles from "@/styles/HomeBanner.module.css"
import NikeBtn from '../Reusable/NikeBtn'

type BannerType={
    bannerNo?:string,
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

const HomeBanner = ({bannerItem}:{ bannerItem: BannerType}) => {
  return (
    <div className={styles['homebanner']}>
     <picture className={styles['homebanner-picture']}>
      <source media={bannerItem.size} srcSet={bannerItem.bigbanner} />
      <img src={bannerItem.smallbanner} alt={bannerItem.title || "Nike_Banner"} loading="lazy"  />
    </picture>
    <div className={styles['homebanner-info']}>
        {bannerItem.title && <p>{bannerItem.title}</p>}
        <h1>
          {bannerItem.type1}
          {bannerItem.type2 && <><br />{bannerItem.type2}</>}
        </h1>
        {bannerItem.info && <p>{bannerItem.info}.</p>}
        <NikeBtn style='nikebtndark' href={bannerItem.btnhref} title={bannerItem.btn} />
    </div>
    </div>
  )
}

export default HomeBanner
