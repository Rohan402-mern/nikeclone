import React from 'react'
import HomeSlider from './HomeSlider'
import styles from "@/styles/SHopBySport.module.css"
import Link from 'next/link';
type SportType={
  key:number;
  src:string;
  href:string;
  title:string;
}

async function getBanner(): Promise<SportType[]> {
  const res = await fetch('http://localhost:8080/nike/shopitem', {
    // Enables Static Site Generation (SSG)
    cache: 'no-cache',
  })
  const data: SportType[]= await res.json();
  return data
  
}

const MenFeatured = async () => { 
     const SportItem = await getBanner()
  return (
    <div>
      <div className={styles['shopbysport']}>
      <HomeSlider title='Featured' move={395}>
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
    </div>
  )
}

export default MenFeatured
