import React from 'react'
import styles from "@/styles/ImageCard.module.css"
import NikeBtn from './NikeBtn'

const ImageItem = [
    {mini:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_825,c_limit/fe3000b6-d3b3-4a6a-870e-bf29dfc06738/nike-just-do-it.jpg",large:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_488,c_limit/8a139bc8-9e23-41aa-b888-a1d9d6bc763a/nike-just-do-it.png",title:"Metcon 10",info:"Strength Starts Here",btn:"Shop",btnref:"in//metcon",size:"(min-width: 960px)",style:'nikebtnlight'},
    {mini:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_825,c_limit/194a5772-d0ef-477d-9dd3-e01b508e45cc/nike-just-do-it.png",large:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_488,c_limit/2b323e24-a58e-4ec7-9ccf-4ca09a44aa14/nike-just-do-it.png",title:"",info:"Ja 3' Channel 12'",btn:"Shop",btnref:"in/metcon",size:"(min-width: 960px)",style:'nikebtnlight'},
    {mini:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_808,c_limit/1fc3922f-fb97-4cfb-8aae-f09bc2d21304/nike-just-do-it.png",large:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_506,c_limit/31682c67-0e36-4c89-86f9-f3b2f36fad27/nike-just-do-it.png",title:"Air Jordan 40 'Blue Suede'",info:"Never been done Is What We Do",btn:"Shop",btnref:"in/metcon",size:"(min-width: 960px)",style:'nikebtnlight'},
    {mini:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_808,c_limit/c86136a8-cd8d-493c-a6c9-7e0cfd9a435f/nike-just-do-it.png",large:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_482,c_limit/c528a0bc-1c68-4048-b2ee-994b855521ba/nike-just-do-it.png",title:"Dunk Low x LEGO® Collection",info:"Drawn to Stand Out",btn:"Shop",btnref:"in/metcon",size:"(min-width: 960px)",style:'nikebtnlight'}
]

const ImageCard = () => {
    
  return (
    <div className={styles['imagecard']}>
      {ImageItem.map((item,index)=>(
        <div className={styles['imagecard-cont']} key={index}>
            <picture className={styles['imagecard-picture']}>
                <source media={item.size} srcSet={item.large} />
                <img src={item.mini} alt="banner_image" />
            </picture>
            <div className={styles['imagecard-element']}>
                <span>{item.title}</span>
                <p>{item.info}</p>
                <NikeBtn title={item.btn} href={item.btnref} style={item.style} />

            </div>
        </div>
      ))}
    </div>
  )
}

export default ImageCard
