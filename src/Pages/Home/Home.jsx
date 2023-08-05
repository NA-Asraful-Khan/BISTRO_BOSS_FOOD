import Banner from "./Banner"
import Category from "./Catagory"
import Featured from "./Featured"
import PopularMenu from "./PopularMenu"
import SloganBanner from "./SloganBanner"
import Testimonials from "./Testimonials"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <SloganBanner></SloganBanner>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  )
}

export default Home