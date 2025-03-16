import banner from '../../assets/home-banner.png'
import '../../../src/styles/Home.scss'
function Home(){

    return(
 
        <div className='home-banner-container'>
            <div className="banner">
                <img src={banner} alt="" />
            </div>
        </div>

)

}
export default Home
