import React, { Component } from 'react'

class HCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
          <div className="HCard">
            <div className="Id" onClick={() => {
              this.props.openCard(true, this.props.display);
            }}>{this.props.display.id}</div>
            <div className="Head" onClick={() => {
              this.props.openCard(true, this.props.display);
            }}>{this.props.display.title}</div>
            <div className="Body" onClick={() => {
              this.props.openCard(true, this.props.display);
            }}>{this.props.display.body}</div>
            <button onClick={() => this.props.deleteCard(this.props.display.id)}> ✘ </button>
          </div>
        );
    }
}

export default HCard
