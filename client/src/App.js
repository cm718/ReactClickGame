import React, { Component } from 'react';
import './App.css';
import cards from './data.json';
import Nav from './components/Nav';
import Header from './components/Header';
import Card from './components/Card';

//import your cards from json file AS cards

class App extends Component {
  state ={
    cards
  }

  handleClick = event => {
    event.preventDefault();

    
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
        <div className="container">
          <div className='row'>
            {this.state.cards.map(card => <Card onClick={this.handleClick} id={card.id} key={card.id} image={card.image} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
