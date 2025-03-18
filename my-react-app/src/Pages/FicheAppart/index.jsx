import AppartList from '../../data/AppartList.json'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../styles/FicheAppart.scss'
import { FaRegStar  } from "react-icons/fa";

// import { chevronUp } from '../../components/CollapseMenu'
const arrowBtn = <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M304-68.43 234.43-139l343-343-343-343L304-895.57 717.57-482 304-68.43Z"/></svg>
function FicheAppart(){
    let params = useParams()
    const filtered = AppartList.filter(appart=>appart.id===params.id)
    const pictures = filtered.map(pic=>pic.pictures)
    const tags = filtered.map(item=>item.tags)
    
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
    function checkSlide(){
        if(pictures[0].length<=0){setArrowButton(false)}
    }
    document.addEventListener('DOMContentLoaded',checkSlide)
    return(
        
        <main className="house-content">
            
            <div className="slider">
                
                {arrowButton?<button className='next-button' onClick={()=>nextSlide(1)}>{arrowBtn}</button>:null}
                <button className='prev-button' onClick={()=>prevSlide(1)}>{arrowBtn}</button>
                {/* {filtered.map(appart=><img src={appart.pictures[slideIndex]} style={{height:'500px', width:'100%'}}/>)} */}
                <img className='slider-item' src={pictures[0][slideIndex]} alt="picture" />
                <span className='slider-pagination'>{slideIndex+1}/{pictures[0].length}</span>
                
            </div>
        <section className="house-properties">
            <div className="title-and-host">
                <h2 className='title'>{filtered.map(item=>item.title)}</h2>
                <h4 className='host'>{filtered.map(item=>item.host.name)}</h4>
                <div className='ball' style={{height:64, width:64, backgroundColor:'#C4C4C4', borderRadius:'50%'}}></div>
            </div>
            <div className='location'>
                <h3 className="house-location">{filtered.map(item=>item.location)}</h3>
            </div>
            <div className="tags-rating">
               
               <ul>
                {tags[0].map((item, index)=><li key={index} className='tag'>{item}</li>)}
                </ul> 
              {filtered.map(item=><span>{item.rating}{[...map(5,i)=<FaRegStar color='red'/>]}</span>)}
            </div>
        </section>
        </main>
    )
}
export default FicheAppart