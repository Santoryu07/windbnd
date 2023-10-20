import React from 'react';
import "./card.css"

const Card = ({ stays }) => {
  return (
    <main>

      {stays.map((stay, index) => (
        <div className="card" key={index}>

            <div className='cardImg'>
                <img src={stay.photo} alt={stay.title}/>
            </div>
          
            <div className="card-body">
                    <p>{stay.type}</p>  

                    <span class="material-symbols-outlined">star</span>
                    <p>{stay.rating}</p>
                    
                <h5 className="card-title">{stay.title}</h5>
            
            </div>

        </div>
      ))}

    </main>
  );
};

export default Card;
