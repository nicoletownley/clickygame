// import React from 'react';
// import ShoeCard from './components/ShoeCard';
// import Wrapper from './components/Wrapper';
// import Title from '.components/Title';
// import shoes from './shoes.json';
// import './App.css'
import React, { Component } from 'react';
import './App.css';
import ShoeCard from './components/ShoeCard/index';
import shoes from './shoes.json';


export default class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      score: 0,
      bestScore:0,
      correct: true,
      display: "",
      priorclick: -1,
      
    }
}

  
  shuffleShoeCard(shoes) {
    for (let i = shoes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shoes[i];
      shoes[i] = shoes[j];
      shoes[j] = temp;
    }
    return shoes;
  }

  selectImage = (id) => {
    console.log(id);
    if (this.state.correct===true) {
      this.setState ({score: this.state.score +1});
      this.setState ({display:" You Guessed Correctly!"});
    }
     else {
      this.setState ({display:" You Guessed Incorrectly!"});
    }
    
  };

  render() {
    console.log (this.state.score);
    let shuffledshoes = this.shuffleShoeCard(shoes);
    return (
      shuffledshoes.map((shoe) => (
        <ShoeCard key={shoe.id} image={shoe.image} click={this.selectImage}></ShoeCard>
        
      ))
    )
  }
}

    //  const shuffleShoes=(shoes) => {
    //   let i = shoes.length - 1;
    //   for (; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     const temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    //   }



//   function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
