import React, { Component } from 'react';
import './style.css';

export default class ShoeCard extends Component {
    handleOnClick = () => {
        this.props.click (this.props.id)
    }
    //set it up so function will run when pictures are clicked on
    render() {
        return (
                <div className='grid-item'>
                        <img alt={this.props.id} src={this.props.image} onClick={this.handleOnClick} />
    
                </div >
        )
    }
}



// import React from 'react';
// import './style.css';

// //set it up so function will run when pictures are clicked on
// function ShoeCard(props) {
//     return (
// <div className='card'>
//     <div className = 'img-container' onClick={()=>{props.gymShoe(props.id)}} scores={props.scores}/>
//     <img alt={props.id}src = {props.image}/>
// </div>
// )};



//    export default Navbar;