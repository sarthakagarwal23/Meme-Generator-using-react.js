import React from 'react';
import './trainer.css';

const trainer=(props)=>{
return(
 <div className='trainer'>
   <strong>NAME:</strong><span>{props.name}</span><br></br>
   <strong>COURSE:</strong><span>{props.course}</span><br></br>
   <button onClick={props.deleteOnClick}>Delete</button>
 </div>

    )
 };

 export default trainer;