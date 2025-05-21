import { TabProvider } from '@/contexts/TabContext'
import Seo from '@/components/Seo'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import SaySection from '@/components/SaySection'
import Benefit from '@/components/Benefit/Benefit'
import Process from '@/components/Process'
import ProjectInfo from '@/components/ProjectInfo'

export default function Home() {
  return (
    <TabProvider>
      <Seo
        title="리뷰어블 | 진짜 이웃의 리뷰 플랫폼"
        description="지역 기반 광고와 리뷰를 연결하는 믿을 수 있는 플랫폼"
        keywords="광고, 리뷰, 플랫폼, 지역, 리뷰어블"
        canonical="https://www.reviewable.kr"
        // image="/og-image.png"
        image="/assets/logo/logo.svg"
      />
      <Layout showFloatingCTA={true}>
        <Hero />
        <Intro />
        <SaySection />
        <Benefit />
        <Process />
        <ProjectInfo />
      </Layout>
    </TabProvider>
  )
}
