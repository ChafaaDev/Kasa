import { useState } from "react"
import { IoIosArrowUp } from "react-icons/io";
import'../../styles/Accordion.scss'

function Accordion({title,content}){
    const[isOpen, setOpen] = useState(false)
    const [isActive, setActive] = useState(false)
    function toggleAccordion(){
        setOpen(!isOpen)
        setActive(!isActive)    
    }
  

    return(
            <div className="accordion-container">
             <div className="accordion-title-and-button">
             <h4 className="accordion-title">{title}</h4>
             <button className={`accordion-button ${isOpen?"active":""}`} onClick={toggleAccordion}><IoIosArrowUp/></button>
             </div>
                {isOpen? <div className='accordion-content'>{content}</div>:null}
            </div>
    )
}
export default Accordion