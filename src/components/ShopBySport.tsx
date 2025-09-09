import React from 'react'
import styles from "@/styles/SHopBySport.module.css"
import HomeSlider from './HomeSlider'
import Link from 'next/link'
export const revalidate = 60
type SportType={
  key:number;
  src:string;
  href:string;
  title:string;
}

async function getBanner(): Promise<SportType[]> {
  const res = await fetch('http://localhost:8080/nike/shopitem', {
    // Enables Static Site Generation (SSG)
    cache: 'force-cache',
  })
  const data: SportType[]= await res.json();
  return data
  
}

 const ShopBySport = async () => {
   const SportItem = await getBanner()
  return (
    <div className={styles['shopbysport']}>
      <HomeSlider title='Shop by Sport' move={395}>
        {SportItem.map((item)=>(
            <li key={item.key}>
                <Link href={item.href}>
                <img src={item.src} alt="" />
                <span>{item.title}</span>
                </Link>
            </li>
        ))}
      </HomeSlider>
    </div>
  )
}

export default ShopBySport
