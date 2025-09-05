import React from 'react';
import styles from "@/styles/ImageCard.module.css";
import NikeBtn from './NikeBtn';

type ImageItemType = {
  imageitemNo?: string;
  mini: string;
  large: string;
  title: string;
  info: string;
  btn: string;
  btnref: string;
  size: string;
  style: string;
};

interface ImageCardProps {
  imageItems: ImageItemType[];
}

const ImageCard: React.FC<ImageCardProps> = ({ imageItems }) => {
  return (
    <div className={styles['imagecard']}>
      {imageItems.map((item, index) => (
        <div className={styles['imagecard-cont']} key={index}>
          <picture className={styles['imagecard-picture']}>
            <source media={item.size} srcSet={item.large} />
            <img src={item.mini} alt={item.title || "banner_image"} />
          </picture>
          <div className={styles['imagecard-element']}>
            <span>{item.title}</span>
            <p>{item.info}</p>
            <NikeBtn title={item.btn} href={item.btnref} style={item.style} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
