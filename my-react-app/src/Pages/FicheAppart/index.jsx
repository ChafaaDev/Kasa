import AppartList from '../../data/AppartList.json'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import '../../styles/FicheAppart.scss'
import {  FaStar   } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import CollapseMenu from '../../components/CollapseMenu';

function FicheAppart(){

let params = useParams()

const filtered = AppartList.filter(appart=>appart.id===params.id)

const pictures = filtered.map(pic=>pic.pictures)

const tags = filtered.map(item=>item.tags)

const rating = filtered.map(item=>item.rating)

const equipments = filtered.map(elem=>elem.equipments)

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
            
            {arrowButton?<button className='next-button' 
                                 onClick={()=>nextSlide(1)}>
                                    <MdArrowForwardIos size={48} 
                                                        color='#ffff'
                                    />
                        </button>:null}
            
            <button className='prev-button' 
                    onClick={()=>prevSlide(1)}>
                        <MdArrowBackIosNew size={48} 
                                            color='#ffff'
                        />
            </button>
            
            <img className='slider-item' src={pictures[0][slideIndex]} alt="picture" />
            
            <span className='slider-pagination'>{slideIndex+1}/{pictures[0].length}</span>
            
        </div>
    <section className="house-properties">
        
        <div className="title-and-host">
            
            <h2 className='title'>{filtered.map(item=>item.title)}</h2>
            
           
            <div className='host-container' style={{borderRadius:'50%'}}>
                <h4 className='host-title'>{filtered.map(item=>item.host.name)}</h4>
                <img src={filtered.map(item=>item.host.picture)} alt="host-picture" style={{objectFit:'cover', height:'64px', borderRadius:'inherit'}}/>
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
                    
                    {[...Array(5)].map(( _ ,index)=>{
                        return <FaStar className='star' 
                                            key={index}
                                            color={setStarcolors(index)}
                                            size={24}
                                            style={{marginRight:'.5em',border:'none'}}/>
                    })}
            </div>
        
        </div>
    </section>
    <section className='details'>
            <div className='accordion'>
            <CollapseMenu property='Description' 
                        description={filtered.map(item=>item.description)}
            />
            </div>
            <div className='accordion'>
             
            <CollapseMenu property = 'Equipement'
                    description = {equipments.map((item, index)=>{
                        return <ul style={{listStyleType:'none', padding:'10px'}}>
                            {item.map(it=><li key={index}>{it}</li>)}
                        </ul>
                    })}
            />
            
             </div>           
        </section>
    </main>
)
}
export default FicheAppart