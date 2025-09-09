import React from 'react'
import styles from "@/styles/SportSlider.module.css"
import HomeSlider from './HomeSlider'
import Link from 'next/link'
import NikeBtn from './Reusable/NikeBtn'

type SportSliderType={
  key:number;
  miniSrc:string;
  largesrc:string;
  btn:string;
  btnHref:string;
  size:string;
}



async function getBanner(): Promise<SportSliderType[]> {
  const res = await fetch('http://localhost:8080/nike/sportitem', {
    cache: 'no-cache',
  })
  const data: SportSliderType[]= await res.json();
  return data
}

const SportSlider = async() => {
    const SportItem = await getBanner()
  return (
    <div className={styles['sportslider']}>
      <HomeSlider title='Shop by Sport' move={435}>
        {SportItem.map((item)=>(
            <li key={item.key}>
                <Link href={item.btnHref}>
                 <picture className={styles['sportslider-picture']}>
                    <source media={item.size} srcSet={item.largesrc} />
                    <img src={item.miniSrc} alt={item.btn || "sport_image"} />
                 </picture>
                 <div className={styles['sportslider-btn']}>
                    <NikeBtn title={item.btn} href={item.btnHref} style='nikebtnlight' />
                 </div>
                </Link>
            </li>
        ))}
      </HomeSlider>
    </div>
  )
}

export default SportSlider
