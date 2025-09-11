import React from 'react'
import styles from "@/styles/Men.module.css"
import NikeBtn from '../Reusable/NikeBtn'
const MenBanner = () => {
  return (
    <div className={styles['btnbanner']}>
      <picture className={styles['homebanner-picture']}>
        <source media="(min-width: 960px)" srcSet="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1192,c_limit/fb7bf27e-b255-47f1-b80e-d1d42c8692c6/men-s-shoes-clothing-accessories.png" />
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_738,c_limit/05d4905e-1058-4bb5-89c4-67aad9c63c9c/men-s-shoes-clothing-accessories.jpg" alt="Banner" loading="lazy"  />
      </picture>
      <div>
        <NikeBtn title='Shop Scottie Scheffler' href='in/men/shoes' style='nikebtnlight' onclick={()=>{}} />
      </div>
    </div>
  )
}

export default MenBanner
