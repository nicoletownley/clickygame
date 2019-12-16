import React, { Component } from 'react';


export default class Navbar extends Component {
  render() {
    return (
      
      <nav className="navbar navbar-expand-large navbar-black bg-black p-0">
        <ul>
          <li className="brand">
            <a ref="/">Clicky Game</a>
          </li>
          <li>
           {this.props.score} 
          </li>
          <li className="">{this.props.display}!</li>
          <a className="nav-link" href="#">Features</a>
    </ul>
    </nav >
      
    )

  }


}

/* {<nav class="navbar">
    <ul>
      <li class="brand">
        <a ref="/">Clicky Game</a>
      </li>
      <li class="">You Guessed Correctly!</li>
        <a class="nav-link" href="#">Features</a>
      <li>

      "Score"
      "4"
      " |Top Score: "
      "4"
      </li>
      </ul>
      </nav>*/
      
    
