import React, { Component } from 'react'
import { FaListAlt } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa";

class SideNavigation extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
      if(this.props.format === "vertical"){
        return (
          <div className="SideNavigation">
            <div className="User">
              <div className="Userimage"></div>
              <div className="Greetuser">Hi Reader,</div>
              <div className="Tittle">Here's your news!</div>
            </div>
            <div className="Toggle ">
              <div className="THeading">View Toggle</div>
              <div className="Switch">
                <div
                  className="Part1V"
                  onClick={() => this.props.toggleSwitch("vertical")}
                ><FaCreditCard className="cIcon"/></div>
                <div
                  className="Part2"
                  onClick={() => this.props.toggleSwitch("horizontal")}
                ><FaListAlt className="lIcon"/></div>
              </div>
            </div>
            <div className="Feedback">
              <div className="FHeading">Have a Feedback?</div>
              <div
                className="FButton"
                onClick={() => {
                  this.props.feedTrigger(true);
                }}
              >We're Listining!</div>
            </div>
          </div>
        );
      } else if(this.props.format === "horizontal"){
        return (
          <div className="SideNavigation">
            <div className="User">
              <div className="Userimage"></div>
              <div className="Greetuser">Hi Reader,</div>
              <div className="Tittle">Here's your news!</div>
            </div>
            <div className="Toggle ">
              <div className="THeading">View Toggle</div>
              <div className="Switch">
                <div
                  className="Part1"
                  onClick={() => this.props.toggleSwitch("vertical")}
                ><FaCreditCard className="cIcon"/></div>
                <div
                  className="Part2H"
                  onClick={() => this.props.toggleSwitch("horizontal")}
                ><FaListAlt className="lIcon"/></div>
              </div>
            </div>
            <div className="Feedback">
              <div className="FHeading">Have a Feedback?</div>
              <div
                className="FButton"
                onClick={() => {
                  this.props.feedTrigger(true);
                }}
              >We're Listining!</div>
            </div>
          </div>
        );
      }
    }
}

export default SideNavigation
