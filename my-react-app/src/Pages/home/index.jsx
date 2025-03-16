// import banner from '../../assets/home-banner.png'
import '../../../src/styles/Home.scss'
import Card from '../../components/Card'
import { AppartList } from '../../data/AppartList'
function Home(){

    return(
        <div className="home-container">
            <div className='home-banner-container'>
                    
                    <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery-home">
                {AppartList.map(appart=>
                    <Card
                    picture={appart.pictures[0]}
                    title={appart.title}/>
                )}
             
            </div>
        </div>
)

}
export default Home
