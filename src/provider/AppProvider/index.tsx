import HelmetProvider from "@/provider/HelmetAppProvider"
import AntProvider from "@/provider/AntProvider"
import Question from "@/modules/Question"
import Mission from "@/modules/Mission"
import Gallery from "@/modules/Gallery"
import TopBar from "@/modules/TopBar"
import Header from "@/modules/Header"
import Change from "@/modules/Change"
import Season from "@/modules/Season"
import Banner from "@/modules/Banner"
import Review from "@/modules/Review"
import Footer from "@/modules/Footer"
import About from "@/modules/About"
import Main from "@/modules/Main"
import Camp from "@/modules/Camp"
import Map from "@/modules/Map"
import "@/locale"

export default function AppProvider() {
  return (
    <HelmetProvider>
      <AntProvider>
        <TopBar />
        <Header />
        <Main>
          <About />
          <Camp />
          <Change />
          <Season />
          <Review />
          <Gallery />
          <Mission />
          <Map />
          <Question />
          <Banner />
        </Main>
        <Footer />
      </AntProvider>
    </HelmetProvider>
  )
}
