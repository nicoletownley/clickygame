
import React, { Component } from 'react';
import './App.css';
import ShoeCard from './components/ShoeCard';
import shoes from './shoes.json';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default class App extends Component {
  constructor(props) {

    super(props);
    this.state = {
      score: 0,
      correct: true,
      display: "Click an image to begin!",
      footer: "Clicky Game!",
      priorClick: -1,
      topScore: 0,

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
    console.log("id: ", id);

    if (this.state.correct === true && this.state.priorClick !== id) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ display: " You Guessed Correctly!" });
    }
    else {
      this.setState({ display: " You Guessed Incorrectly!" });
      this.setState({ score: 0 });
    }
    this.setState({ priorClick: id });

    if (this.state.correct === true && this.state.score >= this.state.topScore) {
      this.setState({ topScore: this.state.score + 1 });

    }
  };


  displayShoes = () => {
    let shuffledshoes = this.shuffleShoeCard(shoes)
    return (shuffledshoes.map((shoe) => (
      <ShoeCard key={shoe.id} id={shoe.id} image={shoe.image} click={this.selectImage}></ShoeCard>)

    ));
  }

  render() {
    console.log("score: ", this.state.score);
    console.log (Footer);


    return (
      <div>
        <Navbar score={this.state.score} topScore={this.state.topScore} display={this.state.display}></Navbar>
        <div className='grid-container'> {this.displayShoes()}
        </div>
        <Footer />
      </div>
    )

  }
}

