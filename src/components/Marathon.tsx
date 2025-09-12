import React from 'react'
import styles from "@/styles/SHopBySport.module.css"
import HomeSlider from './HomeSlider'
import Link from 'next/link'

type Marathon ={
  key:number;
  src:string;
  href:string;
  title:string;
  info:string;
  price:string;
}

async function getBanner(): Promise<Marathon[]> {
  const res = await fetch('http://localhost:8080/nike/marathon', {
    // Enables Static Site Generation (SSG)
    cache: 'no-cache',
  })
  const data: Marathon[]= await res.json();
  return data
  
}

const Marathon = async () => {
  const SportItem = await getBanner()
  return (
    <div className={styles['marathon']}>
      <HomeSlider title='For Marathon Speed' move={435}>
        {SportItem.map((item)=>(
            <li key={item.key}>
                <Link href={item.href}>
                <img src={item.src} alt="" />
                <div className={styles['marathon-div']}>
                    <p>{item.title}</p>
                    <span>{item.info}</span>
                    <p>{item.price}</p>
                </div>
                </Link>
            </li>
        ))}
      </HomeSlider>
    </div>
  )
}

export default Marathon
