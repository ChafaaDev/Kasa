import AppartList from '../../data/AppartList.json'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../styles/FicheAppart.scss'
import { chevronUp } from '../../components/CollapseMenu'
function FicheAppart(){
    let params = useParams()
    const filtered = AppartList.filter(appart=>appart.id===params.id)
    const pictures = filtered.map(pic=>pic.pictures)
    
const [slideIndex, setSlideIndex] = useState(0)
const [arrowButton, setArrowButton] = useState(true)    
   function nextSlide(index){
    setArrowButton(true)
        setSlideIndex(s=>s+index)
        if(slideIndex >= pictures[0].length-1){
            
            setSlideIndex(0)
        }
     
   }

   function prevSlide(index){
    
        setSlideIndex(s=>s - index)
        if(slideIndex==0){setSlideIndex(pictures[0].length - 1)}
    }
    return(
        
        <div className="caroussel">
            <h1>Fiche Logement</h1>
            <div className="slider">
            {arrowButton && (<button className='next-button' onClick={()=>nextSlide(1)}>{chevronUp}</button>)}
            <button className='prev-button' onClick={()=>prevSlide(1)}>{chevronUp}</button>
             {/* {filtered.map(appart=><img src={appart.pictures[slideIndex]} style={{height:'500px', width:'100%'}}/>)} */}
             <img className='slider-item' src={pictures[0][slideIndex]} alt="picture" />
             <span className='slider-pagination'>{slideIndex+1}/{pictures[0].length}</span>
                
            </div>
        </div>
    )
}
export default FicheAppart