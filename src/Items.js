import React from 'react';
import logo from './images/pic.png';
import './Items.css';


const Items = (props)=>{
    return(
        <div className='mainContainer'>
                <div className="container">
          
                    <div className='bodyContainer'>
                        <img src={logo}/>
                    </div>
                    <hr className='line' />

                    <div className='date'>
                        <p>{props.date}</p>
                    </div>

                    <div className='event'>
                        <h4 >{props.eventName}</h4>
                        <p >{props.eventDescription} </p>
                    </div>
                    
                    <div className='btn'>
                    <hr/>
                    <button>ADD PARTICIPANTS </button>|
                    <a href="">WATCHEVENT </a>
                    </div>

                </div>
 

        </div>
    );
}

export default Items;