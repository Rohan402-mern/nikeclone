
import HomeBanner from '@/components/Banner/HomeBanner'
import ShopBySport from '@/components/ShopBySport'
import HomeBanner3 from '@/components/Banner/HomeBanner3'
import HomeBanner2 from '@/components/Banner/HomeBanner2'
import Marathon from '@/components/Marathon'
import SportSlider from '@/components/SportSlider'

type BannerType = {
  bannerNo?: string,
  smallbanner: string,
  bigbanner: string,
  title?: string,
  type1: string,
  type2?: string,
  info: string,
  btn: string,
  btnhref: string,
  size: string,
}

async function getBanner() {
  const res = await fetch('http://localhost:8080/nike/banner/123', { 
    // cache: 'force-cache',  // This tells Next.js to cache the response, enabling SSG behavior
    next:{revalidate:60}
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

export default async function Page() {
  const bannerItem: BannerType = await getBanner()

  return (
    <div>
      <HomeBanner bannerItem={bannerItem} />
      <ShopBySport />
      <HomeBanner3 />
      <HomeBanner2 />
      <Marathon />
      <SportSlider/>
    </div>
  )
}
