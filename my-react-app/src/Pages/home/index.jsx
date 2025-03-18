// import banner from '../../assets/home-banner.png'
import '../../../src/styles/Home.scss'
import Card from '../../components/Card'
import AppartList from'../../data/AppartList.json'
import { Link } from 'react-router-dom'
function Home(){

    return(
        <div className="home-container">
            <div className='home-banner-container'>
                    
                    <h1>Chez vous, partout et ailleurs</h1>
            </div>
            <div className="gallery-home">
                {AppartList.map((appart, index)=>
                <Link to={`/logement/${appart.id}`}>
                    <Card
                    key={index}
                    id = {appart.id}
                    picture={appart.cover}
                    title={appart.title}
                    />
                </Link>   
                )}
             
            </div>
        </div>
)

}
export default Home
