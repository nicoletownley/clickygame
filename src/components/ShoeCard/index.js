import React from 'react';
import './style.css';

//set it up so function will run when pictures are clicked on
function ShoeCard(props) {
    return (
<div className='card'>
    <div className = 'img-container' onClick={()=>{props.gymShoe(props.id)}} scores={props.scores}/>
    <img alt={props.id}src = {props.image}/>
</div>
)};



    export default ShoeCard;