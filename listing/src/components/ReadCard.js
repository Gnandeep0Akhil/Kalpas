import React, { Component } from 'react'

class ReadCard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
          <div className="popup2">
            <div className="popup-inner2">
              <button onClick={() => this.props.openCard(false, null)}> ✘ </button>
              <div className="IdR">{this.props.card.id}</div>
              <div className="HeadR">{this.props.card.title}</div>
              <div className="BodyR">{this.props.card.body}</div>
            </div>
          </div>
        );
    }
}

export default ReadCard
