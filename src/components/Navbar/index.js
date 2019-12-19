import React, { Component } from 'react'
import './style.css'
// import Navbar from 'navbar-react'

class Navbar extends Component {
  render() {
    return (

      <div className='parent'>
        <nav className="navbar navbar-expand-large navbar-black bg-black p-0">

          <div className='navelement'>

            Clicky Game
          </div>

          <div className='navelement'>
            {this.props.display}
          </div>
          <div className='navelement'>
            {this.props.score} | {this.props.topScore}

          </div>
        </nav>
      <header className='child1'>
          <h1>Clicky Game</h1>
          <h2> Click on an image to earn points but don't click on any more than once!</h2>

        </header>
      </div>
    )
  }
}

/* <ul>
  <li className="brand">
    <a ref="/">Clicky Game</a>
  </li>
  <li>
   {this.props.score} 
  </li>
  <li className="">{this.props.display}!</li>
  <a className="nav-link" href="#">Features</a>
</ul>
</nav > */






// /* {<nav class="navbar">
//     <ul>
//       <li class="brand">
//         <a ref="/">Clicky Game</a>
//       </li>
//       <li class="">You Guessed Correctly!</li>
//         <a class="nav-link" href="#">Features</a>
//       <li>

//       "Score"
//       "4"
//       " |Top Score: "
//       "4"
//       </li>
//       </ul>
//       </nav>*/
export default Navbar;