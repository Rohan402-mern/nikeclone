import React from 'react'
import styles from '@/styles/HomeBanner.module.css'
const HeadComponent = ({title}:{title:string}) => {
  return (
    <h1 className={styles['head']}>{title}</h1>
  )
}

const Head = React.memo(HeadComponent)

export default Head
