import React, { Component } from 'react'

class VCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
          <div
            className="VCard"
          >
            <button onClick={() => this.props.deleteCard(this.props.display.id)}> ✘ </button>
            <div className="VHead" onClick={() => {
              this.props.openCard(true, this.props.display);
            }}>{this.props.display.title}</div>
            <div className="VBody" onClick={() => {
              this.props.openCard(true, this.props.display);
            }}>{this.props.display.body}</div>
            <div className="VId" onClick={() => {
              this.props.openCard(true, this.props.display);
            }}>{this.props.display.id}</div>
          </div>
        );
    }
}

export default VCard
