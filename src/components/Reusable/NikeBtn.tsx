import React from 'react'
import Link from 'next/link'
import styles from '@/styles/NikeBtn.module.css'
const NikeBtn = ({href,title,onclick,style}:{href:string,title:string,onclick:()=>void,style:string}) => {
  return (
    <button className={`${styles['nikebtn']} ${styles[style]}`}><Link href={href}>{title}</Link></button>
  )
}

export default NikeBtn
