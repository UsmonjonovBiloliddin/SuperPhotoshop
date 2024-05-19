import "./Home.scss"
import { HomeAbout, HomeBonus, HomeHeader, HomeMavzular, HomeNetworks, HomePrices, HomeThoughts, HomeUsega, HomeVideo, SignUp } from '../..'
const Home = () => {
  return (
    <div className='Home'>
        <HomeHeader/>
        <HomeVideo/>
        <HomeMavzular/>
        <HomeUsega/>
        <HomeBonus/>
        <HomeAbout/>
        <HomeNetworks/>
        <HomeThoughts/>
        <HomePrices/>
        <SignUp/>
    </div>
  )
}

export default Home