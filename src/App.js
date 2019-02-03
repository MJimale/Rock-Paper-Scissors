import React, { Component } from 'react';
import './App.css';

import rocking from "./Img/Rocking.gif";
import paper from "./Img/Paper.png";
import scissors from "./Img/Scissors.png";
import rock from "./Img/Rock.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: rocking,
      computerChoice: rocking,
      display: "",
      result: "Lets go"
    };
    this.playerOptionOne = this.playerOptionOne.bind(this);
    this.playerOptionTwo = this.playerOptionTwo.bind(this);
    this.playerOptionThree = this.playerOptionThree.bind(this);
    this.computerOption = this.computerOption.bind(this);
    this.reset = this.reset.bind(this);
  }

  playerOptionOne() {
    this.setState({ userChoice: rock }, () => {
      this.computerOption();
    });
    this.reset();
  }

  playerOptionTwo(event) {
    this.setState({ userChoice: paper });
    this.computerOption();
    this.determineWinner();
    this.reset();
  }

  playerOptionThree(event) {
    this.setState({ userChoice: scissors });
    this.computerOption();
    this.determineWinner();
    this.reset();
  }

  computerOption() {
    var randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 1) {
      this.setState(
        {
          computerChoice: scissors,
          display: "none"
        },
        () => {
          this.determineWinner();
          console.log(this.state.userChoice + " " + this.state.computerChoice);
        }
      );
    } else if (randomNumber === 2) {
      this.setState(
        {
          computerChoice: paper,
          display: "none"
        },
        () => {
          this.determineWinner();
          console.log(this.state.userChoice + " " + this.state.computerChoice);
        }
      );
    } else {
      this.setState(
        {
          computerChoice: rock,
          display: "none"
        },
        () => {
          this.determineWinner();
          console.log(this.state.userChoice + " " + this.state.computerChoice);
        }
      );
    }
  }

  determineWinner() {
    if (this.state.userChoice === rock) {
      if (this.state.computerChoice === rock) {
        this.setState({
          result: "Draw"
        });
      } else if (this.state.computerChoice === paper) {
        this.setState({
          result: "You lose"
        });
      } else {
        this.setState({
          result: "You win"
        });
      }
    }

    if (this.state.userChoice === paper) {
      if (this.state.computerChoice === paper) {
        this.setState({
          result: "Draw"
        });
      } else if (this.state.computerChoice === scissors) {
        this.setState({
          result: "You lose"
        });
      } else {
        this.setState({
          result: "You win"
        });
      }
    }

    if (this.state.userChoice === scissors) {
      if (this.state.computerChoice === scissors) {
        this.setState({
          result: "Draw"
        });
      } else if (this.state.computerChoice === rock) {
        this.setState({
          result: "You lose"
        });
      } else {
        this.setState({
          result: "You win"
        });
      }
    }
  }

  reset() {
    setTimeout(() => {
      this.setState({
        userChoice: rocking,
        computerChoice: rocking,
        result: "",
        display: ""
      });
    }, 2000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Rock Paper Scissors!</h1>
          <h4 style={{ display: this.state.display }}>
            AKA: Ching Chang Wolla
          </h4>
          <h2>{this.state.result}</h2>
        </header>
        <div id="game">
          <img
            id="firstImage"
            src={this.state.userChoice}
            alt="loading..."
            height="180"
            width="150"
          />

          <img
            id="secondImage"
            src={this.state.computerChoice}
            alt="loading..."
            height="180"
            width="150"
          />

          <div id="buttonContainer" style={{ display: this.state.display }}>
            <button id="rock" onClick={this.playerOptionOne}>
              Rock
            </button>
            <button onClick={this.playerOptionTwo}>Paper</button>
            <br />
            <button onClick={this.playerOptionThree}>Scissors</button>
          </div>
        </div>
      </div>
    );
  }
}
 

export default App;
