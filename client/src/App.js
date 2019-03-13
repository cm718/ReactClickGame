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
      // clear the set
      this.state.clickedIDs.clear();
      // change the message to let them know they lost
      this.setState({
        message: 'Game over!'
      })
    } // else the clicked id is not in the set
    else{
      // add the id to the set
      this.state.clickedIDs.add(id)
      // if the set already holds all 12 declare winner
      if (this.state.clickedIDs.size === 12){
        // update top score
        if (this.state.topScore <= this.state.clickedIDs.size){
          this.setState({topScore: this.state.clickedIDs.size})
        }
        // set the message to 'You win'
        this.setState({
          message: 'You win!'
        });
      } // else declare success and keep game going 
      else {
        // set the top score to highest score
        if (this.state.topScore <= this.state.clickedIDs.size){
          this.setState({topScore: this.state.clickedIDs.size})
        }
        // update the message to 'Success!'
        this.setState({
          message: 'Success!'
        });
      }
    }
    // set the score equal to the size of the set holding the IDs
    this.setState({score: this.state.clickedIDs.size})


    // if (this.state.score > this.state.topScore){
    //   this.setState({topScore: this.state.score})
    // }

  };
      
  render() {
    return (
      <div>
        <Nav />
        <Header message={`${this.state.message} | Score: ${this.state.score} | Top Score: ${this.state.topScore}`} />
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
