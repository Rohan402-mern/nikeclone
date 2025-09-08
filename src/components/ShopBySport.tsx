import React from 'react'
import styles from "@/styles/SHopBySport.module.css"
import HomeSlider from './HomeSlider'
import Link from 'next/link'
const SportItem=[
    {key:0, src:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_659,c_limit/a1333c28-e0b7-4f7d-b36e-bc3c96890609/nike-just-do-it.png",href:"/in/w/basketball-3glsm",title:"Basketball"},
    {key:1, src:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_659,c_limit/11886c98-e7bd-47bd-afd7-ef2d0e9f1c36/nike-just-do-it.png",href:"/in/w/football-1gdj0",title:"Football"},
    {key:2, src:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_659,c_limit/0c96ec6d-7870-4e62-a44c-4857e403dffd/nike-just-do-it.jpg",href:"/in/w/running-37v7j",title:"Running"},
    {key:3, src:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_659,c_limit/ea74f6f4-2a4b-429a-a9ac-761cb81b9f8d/nike-just-do-it.png",href:"/in/w/tennis-ed1q",title:"Tennis"},
    {key:4, src:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_659,c_limit/19c7721d-8fc7-4176-8fe1-dc1743e11f19/nike-just-do-it.png",href:"in/w/golf-23q9w",title:"Golf"},
    {key:5, src:"https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_659,c_limit/2bc50e62-3184-41f2-bd04-e2a1d0f1baff/nike-just-do-it.png",href:"/in/w/skateboarding-8mfrf",title:"Skateboarding"},
]
const ShopBySport = () => {
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
