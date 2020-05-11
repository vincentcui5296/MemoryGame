import React, { Component } from 'react';
import Navbar from './components/Navbar';
import ColorBoxes from './components/ColorBoxes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: this.generateBoxes(),
      previousBoxId: -1,
      correctId: new Set(),
    };

    this.newGame = this.newGame.bind(this);
    this.showColor = this.showColor.bind(this);
  }

  newGame() {
    this.setState({
      boxes: this.generateBoxes(),
      previousBoxId: -1,
      correctId: new Set(),
    });
  }

  showColor(id) {
    if(this.state.previousBoxId === -1) {
      const boxes = this.state.boxes.map((m, i) => i === id ? {...m, show: true} : m);
      this.setState({boxes, previousBoxId: id});
    } else {
      if(this.state.boxes[id].backgroundColor === this.state.boxes[this.state.previousBoxId].backgroundColor) {
        const correctId = new Set(this.state.correctId);
        correctId.add(id);
        correctId.add(this.state.previousBoxId);      
        this.setState({correctId});
      } else {
        setTimeout(() => {
          const boxes = this.state.boxes.map((m, i) => this.state.correctId.has(i) ? m : {...m, show: false});
          this.setState({boxes, previousBoxId: -1});
        }, 1000)
      }
      const boxes = this.state.boxes.map((m, i) => i === id ? {...m, show: true} : m);
      this.setState({boxes, previousBoxId: -1});
    }
  }

  generateBoxes() {
    const boxes1 = Array(8).fill().map((m, i) => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return { backgroundColor: `rgb(${r}, ${g}, ${b})`, show: false }
    });

    const boxes2 = boxes1.slice()

    return boxes1
            .concat(boxes2)
            .sort(() => 0.5 - Math.random())
            .map((m, i) => ({...m, id: i}));
  }

  render() {
    return (
      <div className="App">
          <Navbar newGame={this.newGame} />
          <ColorBoxes {...this.state} showColor={this.showColor} />
      </div>
    );
  }
}

export default App;
