import Head from '../Reusable/Head'
import ImageCard from '../Reusable/ImageCard'

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
}

// Server-side fetch function
async function getImageItems(): Promise<ImageItemType[]> {
  const res = await fetch('http://localhost:8080/nike/all', {
    // Cache for SSG behavior, you can customize this depending on your cache invalidation needs
    cache: 'force-cache'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch image items');
  }

  const data = await res.json();
  return data;
}

export default async function HomeBanner3() {
  const imageItems = await getImageItems();

  return (
    <div>
      <Head title="Featured" />
      <ImageCard imageItems={imageItems} />
    </div>
  );
}
