import React from 'react'
import styles from "@/styles/SHopBySport.module.css"
import HomeSlider from './HomeSlider'
import Link from 'next/link'

const SportItem=[
    {key:0, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/1f997160-79aa-4be8-a178-5101a85ada62/alphafly-3-road-racing-shoes-d6x9mh.png",href:"/in/w/basketball-3glsm",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:1, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/122d8e49-5377-42f3-b008-6516bd831886/zoom-fly-6-road-racing-shoes-kmkgZS.png",href:"/in/w/football-1gdj0",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:2, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/cf32ceab-a169-4c85-96af-4c7c0a6e8733/zoom-fly-6-road-racing-shoes-PZG8ZD.png",href:"/in/w/running-37v7j",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:3, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/689213de-9081-4f27-8a94-74fb3e3d6a78/alphafly-3-road-racing-shoes-C4VXTw.png",href:"/in/w/tennis-ed1q",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:4, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/21f56016-2e59-4392-b80f-c9440573f798/vaporfly-4-road-racing-shoes-PTwDtp.png",href:"in/w/golf-23q9w",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:5, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/77c93dde-ec71-40c7-bdbe-3020392ec4ae/vaporfly-4-road-racing-shoes-2dcdFt.png",href:"/in/w/skateboarding-8mfrf",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:6, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/537c3e5c-e369-47b0-9e4f-a1730f1548e7/streakfly-2-road-racing-shoes-gL3BZf.png",href:"/in/w/skateboarding-8mfrf",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:7, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/d447f58e-ccf5-4675-8b6e-ef7a2db5a51f/alphafly-3-road-racing-shoes-d6x9mh.png",href:"/in/w/skateboarding-8mfrf",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:8, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/49cecf57-1f3e-4c43-8685-b7694eed04ff/alphafly-3-road-racing-shoes-C4VXTw.png",href:"/in/w/skateboarding-8mfrf",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
    {key:9, src:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_559,c_limit/b74b226b-13e6-4c53-9e01-effb11090beb/zoom-fly-6-road-racing-shoes-kmkgZS.png",href:"/in/w/skateboarding-8mfrf",title:"Nike Alphafly 3", info:"Men's Road Racing shoes", price:"MRP : ₹ 22 795.00"},
]
const Marathon = () => {
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
