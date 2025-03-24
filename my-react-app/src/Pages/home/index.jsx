// import banner from '../../assets/home-banner.png'
import "../../../src/styles/Home.scss";
import Card from "../../components/Card";
import AppartList from "../../data/AppartList.json";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";
function Home() {
  return (
    
    <div className="home-container">
      <div className="home-banner-container">
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <div className="gallery-home">
        {AppartList.map((appart, index) => (
        
         <Link to={`/logement/${appart.id}`} key={index}>
           <figure> 
            <Card
              id={appart.id}
              picture={appart.cover}
              title={appart.title}
            />
            </figure>
          </Link>
        
        ))}
      </div>
    </div>
   
  );
  
}
export default Home;
