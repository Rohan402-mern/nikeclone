"use client"
import React, { ReactNode, useEffect } from 'react'
import styles from "@/styles/HomeSlider.module.css"
import Head from './Reusable/Head'
import { useRef,useState } from 'react'

const HomeSlider = ({children,title,move}:{children:ReactNode,title:string,move:number}) => {
    const slideRef = useRef<HTMLDivElement>(null)
    const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const checkScrollPosition = () => {
    const slider = slideRef.current
    if (slider) {
      const { scrollLeft, scrollWidth, clientWidth } = slider
      setAtStart(scrollLeft <= 0)
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1)
    }
  }
    const slideright=()=>{
        const slider = slideRef.current
       if (slider) {
        slider.scrollBy({ left: move, behavior:'smooth' })

       }
    }
    const slideleft=()=>{
        const slider = slideRef.current
        if (slider) {
            slider.scrollBy({ left: -move, behavior:'smooth' })
        }
    }

    useEffect(() => {
    const slider = slideRef.current
    if (!slider) return

    checkScrollPosition()
    slider.addEventListener('scroll', checkScrollPosition)

    
    return () => slider.removeEventListener('scroll', checkScrollPosition)
  }, [])

  return (
    <div className={styles['homeslider']}>
        <div className={styles['homeslider-controls']}>
            <Head title={title} />
            <div>
                <img className={atStart? styles.disabled:""} onClick={slideleft} src="icons/left.png" alt="" />
                <img className={atEnd? styles.disabled:""} onClick={slideright} src="icons/right.png" alt="" />
            </div>
        </div> 
      <div className={styles['homeslider-cont']}>
        <div ref={slideRef} >
            {children}
        </div>
      </div>
    </div>
  )
}

export default HomeSlider
