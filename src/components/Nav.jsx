import React, { useState, useRef } from 'react'
import logo from '../img/logo.png'
import "./nav.css"

function Nav() {

    const [locationInputValue, setLocationInputValue] = useState('');
    const [guestsInputValue, setGuestsInputValue] = useState('');

    const mainLocationInputRef = useRef(null);

    const handleMainLocationClick = () => {
        setLocationInputValue(mainLocationInputRef.current.value);
        const offcanvasLocationInput = document.querySelector('#offcanvasTop input[placeholder="Set location"]');
        offcanvasLocationInput.focus();
    };

    const mainGuestsInputRef = useRef(null);

    const handleMainGuestsClick = () => {
        setGuestsInputValue(mainGuestsInputRef.current.value);
        const offcanvasGuestsInput = document.querySelector('#offcanvasTop input[placeholder="Add guests"]');
        offcanvasGuestsInput.focus();
    };

  return (
    <div id='nav'>
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <img src={logo}  width="100" className='img'/>
                </a>
                <form class="d-flex" role="search" id='buscar'>

                    <input  type="search" placeholder="Set location" aria-label="Search" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" id='in1'ref={mainLocationInputRef} onClick={handleMainLocationClick}/>


                    <input  type="search" placeholder="Add guests" aria-label="Search" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" id='in2' ref={mainGuestsInputRef} onClick={handleMainGuestsClick}/>
                    
                    <button  type="submit" ><span class="material-symbols-outlined"> <strong>search</strong> </span></button>

                </form>

                

            </div>
        </nav>


        <div class="offcanvas offcanvas-top"  id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div class="off-header">

                    <div className='bus'>
                        <p> <strong>LOCATION</strong> </p>
                        <div>
                            <input  type="search" placeholder="Set location" aria-label="Search" class="d-flex align-items-start"/>
                        </div>
                        
                    </div>

                    <div className='bus'>
                        <p> <strong>GUESTS</strong> </p>
                        <div>
                            <input  type="search" placeholder="Add guests" aria-label="Search" class="d-flex align-items-start"/>
                        </div>
                        
                    </div>

                    <button  type="submit" id='btn'><span class="material-symbols-outlined"> <strong>search</strong> </span> Search</button>

        

            </div>
            <div class="offcanvas-body">
                ...
            </div>
        </div>



    </div>
  )
}



export default Nav


