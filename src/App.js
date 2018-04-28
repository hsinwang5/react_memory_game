import React, { Component } from 'react';
import './App.css';
import NavBar from "./NavBar"
import RenderBoxes from "./RenderBoxes"

class App extends Component {
  constructor(props) {
    super(props);
    const randomizedArray = createRandomizedArray();
    this.state = {
      initialArray: ["gray","gray","gray","gray","gray","gray","gray","gray",
      "gray","gray","gray","gray","gray","gray","gray","gray",],
      randomizedArray,
      checkSolution: [],
      prevIndex: 0,
      pointerEvents: "auto"
    }

    function randomInt(max) {
      return Math.floor(Math.random() * max);
    }
    function createRandomizedArray() {
      const randomizedArray = [];
      const colorArr = props.colors.slice();
      const colorlength = colorArr.length;
      for (let i=0; i<colorlength; i++) {
        randomizedArray.push(colorArr.splice(randomInt(colorArr.length), 1)[0]);
      }
      return randomizedArray;
    }

    this.handleFlip = this.handleFlip.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  handleFlip(cardID) {
    const newArr = this.state.initialArray.slice();
    newArr[cardID] = this.state.randomizedArray[cardID];
    const solution = newArr[cardID];
    let checkSolution = this.state.checkSolution;
    let prevIndex = this.state.prevIndex;
    checkSolution.push(solution);
    if (checkSolution.length === 2) {
      this.setState({pointerEvents: "none"});
      setTimeout(() => {
        this.checkAnswer(newArr, solution, cardID);
      }, 750)
    } else {
      prevIndex = cardID;
    }
    this.setState((prevState, props) => ({
      initialArray: newArr,
      checkSolution,
      prevIndex
    }));
  }

  checkAnswer(newArr, solution, cardID) {
    let checkSolution = this.state.checkSolution;
    let prevIndex = this.state.prevIndex;
    if (this.state.checkSolution[0] !== solution) {
      checkSolution = [];
      newArr[cardID] = "gray";
      newArr[prevIndex] = "gray";
    } else {
      checkSolution = [];
    }
    this.setState((prevState, props) => ({
      initialArray: newArr,
      checkSolution,
      prevIndex,
      pointerEvents: "auto"
    }));
  }

  startNewGame() {
    const randomizedArray = this.createRandomizedArray; 
    const initialArray = ["gray","gray","gray","gray","gray","gray","gray","gray",
    "gray","gray","gray","gray","gray","gray","gray","gray",]
    this.setState({
      randomizedArray,
      initialArray,
      checkSolution: [],
      prevIndex: 0,
      pointerEvents: "auto"
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar title="Memory Game" newGame={this.startNewGame} />
        <RenderBoxes 
          colorArr={this.state.initialArray} 
          flipCard={this.handleFlip}
          pointerEvents={this.state.pointerEvents} 
        />
      </div>
    );
  }
}

App.defaultProps = {
  colors: ["red", "blue", "green", "yellow", "orange", "purple", "black", "pink",
  "red", "blue", "green", "yellow", "orange", "purple", "black", "pink"],
  boxColor: "gray"
}

export default App;
