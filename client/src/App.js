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
        cards,
        message: 'Only click each image once!',
        score: 0,
        topScore: 0,
        clickedIDs: new Set()
      }
      
  }
  handleClick = id => {
    console.log('id', id);

    //check if id is in set
    console.log('has ID', this.state.clickedIDs.has(id));
    
    
    // if the clicked id is already in the set
    if(this.state.clickedIDs.has(id)){
      //log game over
      console.log('game over');
      // clear the set
      this.state.clickedIDs.clear();
      // change the message to let them know they lost
      this.setState({
        message: 'Game over!'
      })
    }
    // if the clicked id is not in the set
    else{
      this.state.clickedIDs.add(id)
      if (this.state.clickedIDs.size === 12){
        this.setState({message: 'You win!'});
      } else {
        this.setState({
          message: 'Success!'
        })
      }
    }

    this.setState({score: this.state.clickedIDs.size})

  };
      
  render() {
    return (
      <div>
        <Nav />
        <Header message={`${this.state.message} Score: ${this.state.score}`} />
        <div className="container">
          <div className='row'>
            {this.state.cards.map(card => 
              <Card 
                handleClick={() => this.handleClick(card.id)} 
                id={card.id} 
                key={card.id} 
                image={card.image} 
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
    
}
  
  

export default App;
