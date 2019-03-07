import React, { Component } from 'react';
import './App.css';
import cards from './data.json';
import Card from './components/Card';

//import your cards from json file AS cards

class App extends Component {
  state ={
    cards // = []
  }


  render() {
    return (
      <div>
        {/* <Nav />
        <Header /> */}
        <div id="cardGrid">
          {this.state.cards.map(card => <Card id={card.id} key={card.id} image={card.image} />)}
        </div>

        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
