import '../../styles/Collapse.scss'
import { useState, useEffect, useRef } from 'react'
export const chevronUp = <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" 
                        width="40px" fill="#fff">
                        <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"/>
                    </svg>

function CollapseMenu({property, description,id}){
    const [isActive, setIsActive] = useState(false)
    const ContentRef = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(()=>{
        
        if(isActive){
                        setHeight(ContentRef.current.scrollHeight) 
                          
        }else{
                        setHeight(0)
                         
        }
    }, [isActive])

    function toggleText(){

        setIsActive(isActive=>!isActive)
    }

    return(
        
            <article className="collapse-container">
                <div className="collapse-item">
                <h3 className='title'>{property}</h3>
                <button className={`arrow ${isActive? 'active' : ''}`} onClick={toggleText}>{chevronUp}</button>
                
                </div>
               
                <div ref={ContentRef} className='description' id={id} style={{height:`${height}px`}}>
                    <div className='description-text'>{description}</div>
                </div>
            </article>
           
    )
}
export default CollapseMenu