import Banner from "./Banner"
import Category from "./Catagory"
import Featured from "./Featured"
import PopularMenu from "./PopularMenu"


const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
    </div>
  )
}

export default Home