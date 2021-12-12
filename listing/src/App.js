import './App.css';
import React, { Component } from 'react'
import SideNavigation from './components/SideNavigation';
import Display from './components/Display';
import FeedBack from './components/FeedBack';
import ReadCard from './components/ReadCard';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: [],
      feedTrigger: false,
      cardTrigger: false,
      popup: null,
      format: "horizontal"
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors"
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ cards: [...data] });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteCard = (id) => {
    var res = [];
    for(let i=0; i<this.state.cards.length; i++){
      if( this.state.cards[i].id !== id ){
        res = [...res, this.state.cards[i]];
      }
    }
    this.setState({ cards: [...res] });
  }

  openCard = (bool, value) => {
    this.setState({ cardTrigger: bool });
    this.setState({ popup: value });
  }

  toggleSwitch = (value) => {
    this.setState({ format: value });
  }

  feedTrigger = (value) => {
    this.setState({ feedTrigger: value});
  }

  render() {
    if (
      this.state.feedTrigger === false &&
      this.state.cardTrigger === false 
    ) {
      return (
        <div>
           <SideNavigation feedTrigger={this.feedTrigger} toggleSwitch={this.toggleSwitch} format={this.state.format}/>
           <Display cards={this.state.cards} openCard={this.openCard} deleteCard={this.deleteCard} format={this.state.format}/>
        </div>
      );
    } else if (this.state.cardTrigger === true) {
      return (
        <div>
           <Display cards={this.state.cards} openCard={this.openCard} deleteCard={this.deleteCard} format={this.state.format}/>
           <SideNavigation feedTrigger={this.feedTrigger} toggleSwitch={this.toggleSwitch} format={this.state.format}/>
           <ReadCard card={this.state.popup} openCard={this.openCard} />
        </div>
      );
    } else if (this.state.feedTrigger === true) {
      return (
        <div>
           <Display cards={this.state.cards} openCard={this.openCard} deleteCard={this.deleteCard} format={this.state.format}/>
           <FeedBack feedTrigger={this.feedTrigger} />
        </div>
      );
    } else {
      return "Something went wrong!";
    }
  }
}

export default App