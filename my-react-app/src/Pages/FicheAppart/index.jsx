import AppartList from '../../data/AppartList.json'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../styles/FicheAppart.scss'
import {  FaStar   } from "react-icons/fa";

// import { chevronUp } from '../../components/CollapseMenu'
const arrowBtn = <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#FFFFFF"><path d="M304-68.43 234.43-139l343-343-343-343L304-895.57 717.57-482 304-68.43Z"/></svg>
function FicheAppart(){

let params = useParams()

const filtered = AppartList.filter(appart=>appart.id===params.id)

const pictures = filtered.map(pic=>pic.pictures)

const tags = filtered.map(item=>item.tags)

const rating = filtered.map(item=>item.rating)

const [slideIndex, setSlideIndex] = useState(0)

const [arrowButton, setArrowButton] = useState(true)

const [colors, setColors]  = useState('red')

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

function setStarcolors(index){
    
    if(index < rating){
        return '#FF6060'
        
    }else{
            return '#E3E3E3'
    }
}
return(
    
    <main className="house-content">
        
        <div className="slider">
            
            {arrowButton?<button className='next-button' onClick={()=>nextSlide(1)}>{arrowBtn}</button>:null}
            
            <button className='prev-button' onClick={()=>prevSlide(1)}>{arrowBtn}</button>
            
            <img className='slider-item' src={pictures[0][slideIndex]} alt="picture" />
            
            <span className='slider-pagination'>{slideIndex+1}/{pictures[0].length}</span>
            
        </div>
    <section className="house-properties">
        
        <div className="title-and-host">
            
            <h2 className='title'>{filtered.map(item=>item.title)}</h2>
            
            <h4 className='host'>{filtered.map(item=>item.host.name)}</h4>
            
            <div className='ball' style={{height:64, width:64, backgroundColor:'#C4C4C4', borderRadius:'50%'}}>

            </div>

        </div>
        
        <div className='location'>
            <h3 className="house-location">{filtered.map(item=>item.location)}</h3>

        </div>
        
        <div className="tags-rating">
            
            <ul>
            {tags[0].map((item, index)=><li key={index} className='tag'>{item}</li>)}
            </ul> 
            
            <div className="rating-stars-container">
                    
                    {[...Array(5)].map((star,index)=>{
                        return <FaStar className='star' 
                                            key={index}
                                            color={setStarcolors(index)}
                                            size={24}
                                            style={{marginRight:'.5em',border:'none'}}/>
                    })}
            </div>
        
        </div>
    </section>
    </main>
)
}
export default FicheAppart