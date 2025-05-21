import Header from './Header/Header'
import Footer from './Footer/Footer'
import FloatingCTA from './FloatingCTA'

interface LayoutProps {
  children: React.ReactNode
  showFloatingCTA?: boolean
}

export default function Layout({ children, showFloatingCTA = true }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      {showFloatingCTA && <FloatingCTA />}
    </>
  )
}
