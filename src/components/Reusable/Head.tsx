import React from 'react'
import styles from '@/styles/HomeBanner.module.css'
const Head = ({title}:{title:string}) => {
  return (
    <h1 className={styles['head']}>{title}</h1>
  )
}

export default Head
