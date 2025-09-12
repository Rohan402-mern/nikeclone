import React from 'react'
import Link from 'next/link'
import styles from '@/styles/NikeBtn.module.css'
type NikeBtnProps = {
  href: string
  title: string
  onclick?: () => void
  style: string
}
const NikeBtn = ({href,title,onclick,style}:NikeBtnProps) => {
  return (
    <button className={`${styles['nikebtn']} ${styles[style]}`}><Link href={href}>{title}</Link></button>
  )
};

export default React.memo(NikeBtn)
