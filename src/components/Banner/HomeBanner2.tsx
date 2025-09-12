
import HomeBanner from './HomeBanner'
import Head from '../Reusable/Head'

type BannerType = {
  bannerNo?: string;
  smallbanner: string;
  bigbanner: string;
  title?: string;
  type1: string;
  type2?: string;
  info: string;
  btn: string;
  btnhref: string;
  size: string;
}

async function getBanner(): Promise<BannerType> {
  const res = await fetch('http://localhost:8080/nike/banner/124', {
    // Enables Static Site Generation (SSG)
    cache: 'force-cache',
  })
  const data = await res.json()

  return {
    bannerNo: data._id,
    smallbanner: data.smallbanner,
    bigbanner: data.bigbanner,
    title: data.title,
    type1: data.type1,
    type2: data.type2,
    info: data.info,
    btn: data.btn,
    btnhref: data.btnhref,
    size: data.size,
  }
  
}

export default async function HomeBanner2() {
  const bannerItem = await getBanner()

  return (
    <div>
      <Head title="Don't Miss" />
      <HomeBanner bannerItem={bannerItem} />
    </div>
  )
}

