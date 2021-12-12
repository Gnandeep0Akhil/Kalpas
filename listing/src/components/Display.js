import React, { Component } from 'react'
import HCard from './HCard';
import VCard from './VCard';

class Display extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
      if( this.props.format === "vertical" ){
        return (
          <div className="Cards">
            {this.props.cards.map((item) => (
              <VCard
                display={item}
                openCard={this.props.openCard}
                deleteCard={this.props.deleteCard}
              />
            ))}
          </div>
        );
      } else if( this.props.format === "horizontal" ){
        return (
          <div className="HCards">
            {this.props.cards.map((item) => (
              <HCard
                display={item}
                openCard={this.props.openCard}
                deleteCard={this.props.deleteCard}
              />
            ))}
          </div>
        );
      }
    }
}

export default Display
