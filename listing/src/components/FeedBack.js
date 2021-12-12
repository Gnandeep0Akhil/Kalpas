import React, { Component } from 'react'
import validator from "validator";

class FeedBack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fName: null,
      lName: null,
      address: null,
      country: null,
      mail: null,
      phone: null,
      merror: null,
      perror: null
    };
  }

  handleChangeFn = (event) => {
    this.setState({ fName: event.target.value });
  };

  handleChangeLn = (event) => {
    this.setState({ lName: event.target.value });
  };

  handleChangeA = (event) => {
    this.setState({ address: event.target.value });
  };

  handleChangeC = (event) => {
    this.setState({ country: event.target.value });
  };

  handleChangeM = (event) => {
    var email = event.target.value;

    if (validator.isEmail(email)) {
      this.setState({ mail: event.target.value });
      this.setState({ merror: null });
    } else {
      this.setState({ mail: event.target.value });
      this.setState({ merror: "Enter valid Email!" });
    }
  };

  handleChangeP = (event) => {
    var phone = event.target.value;

    if (validator.isMobilePhone(phone)) {
      this.setState({ phone: event.target.value });
      this.setState({ perror: null });
    } else {
      this.setState({ phone: event.target.value });
      this.setState({ perror: "Enter valid number!" });
    }
  };

  handleSubmit = (event) => {
    this.setState({
      fName: null,
      lName: null,
      address: null,
      country: null,
      mail: null,
      phone: null,
      merror: null,
      perror: null,
    });
    event.preventDefault();
  };

  render() {
    return (
      <div className="popup">
        <div className="popup-inner">
          <button onClick={() => this.props.feedTrigger(false)}> ✘ </button>
          <div className="User">
            <div className="Userimage"></div>
            <div className="Greetuser">Hi Reader,</div>
            <div className="Tittle">Here's your news!</div>
          </div>
          <div className="Feedback2">
            <div className="FHeading2">Have a Feedback?</div>
            <div
              className="FButton2"
              onClick={() => {
                this.props.feedTrigger(false);
              }}
            >
              We're Listining!
            </div>
          </div>
          <div className="Fform">
            <h2>Thank you so much for taking the time!</h2>
            <p>Please provide the below details.</p>
            <form onSubmit={this.handleSubmit} id="usrform">
              <label>
                First Name:
                <input
                  type="text"
                  name="fName"
                  value={this.state.fName || ""}
                  onChange={this.handleChangeFn}
                  placeholder="John"
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lName"
                  value={this.state.lName || ""}
                  onChange={this.handleChangeLn}
                  placeholder="Doe"
                />
              </label>
              <label>
                Address:
                <textarea
                  rows="4"
                  cols="50"
                  form="usrform"
                  type="text"
                  name="address"
                  value={this.state.address || ""}
                  onChange={this.handleChangeA}
                  placeholder="Enter your full Postal Address"
                ></textarea>
              </label>
              <label>
                Country:
                <input
                  type="text"
                  name="country"
                  value={this.state.country || ""}
                  onChange={this.handleChangeC}
                  placeholder="India"
                />
              </label>
              <label>
                Email ID:
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    margin: "0px 0px 0px 380px",
                  }}
                >
                  {this.state.merror}
                </span>
                <input
                  type="text"
                  name="mail"
                  value={this.state.mail || ""}
                  onChange={this.handleChangeM}
                  placeholder="abcd@gmail.com"
                />
              </label>
              <label>
                Phone Number:
                <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                    margin: "0px 0px 0px 310px",
                  }}
                >
                  {this.state.perror}
                </span>
                <input
                  type="number"
                  name="phone"
                  value={this.state.phone || ""}
                  onChange={this.handleChangeP}
                  placeholder="1234567890"
                />
              </label>
              <br></br>
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedBack
