"use client";
import React, { useEffect, useState } from 'react';
import Head from '../Reusable/Head';
import ImageCard from '../Reusable/ImageCard';

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

const HomeBanner3 = () => {
  const [imageItems, setImageItems] = useState<ImageItemType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImageItems = async () => {
      try {
        const res = await fetch('http://localhost:8080/nike/all'); // Adjust your backend endpoint
        if (!res.ok) {
          throw new Error("Failed to fetch image items");
        }
        const data = await res.json();
        setImageItems(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImageItems();
  }, []);

  return (
    <div>
      <Head title="Featured" />
      <ImageCard imageItems={imageItems} />
    </div>
  );
};

export default HomeBanner3;
