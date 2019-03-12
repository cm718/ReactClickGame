import React, { Component } from 'react';
import './App.css';
import cards from './data.json';
import Nav from './components/Nav';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';


class App extends Component {
  constructor(props){
    super(props) 
      
      this.state ={
        cards
      }
      
  }
  handleClick = event => {
    event.preventDefault();
    alert('hello');
    
  };
      
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
        <Footer />
      </div>
    );
  }
    
}
  
  

export default App;
