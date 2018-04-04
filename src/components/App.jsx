import React, { Component } from "react";
import "../styles/App.css";

import UsernameInput from "./UsernameInput";
import ConfidentialText from "./ConfidentialText";
import TextInput from "./TextInput";
import UsernameOutput from "./UsernameOutput";
import GithubStar from "./GithubStar";
import PlainText from "./PlainText";

import usernameToZeroWidth from "../utils/usernameToZeroWidth";
import zeroWidthToUsername from "../utils/zeroWidthToUsername";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      revealedUsername: "",
      zeroWidthUsername: "",
      confidentialHeading: ""
      //confidentialText: "Ini teks kelihatan",
    };
    this.getPlainText = this.getPlainText.bind(this);
    this.getUsername = this.getUsername.bind(this);
    this.revealUsername = this.revealUsername.bind(this);
  }

  getPlainText(event) {
    this.setState({
      confidentialHeading: event.target.value
    });
  }

  getUsername(event) {
    this.setState({
      zeroWidthUsername: usernameToZeroWidth(event.target.value)
    });
  }

  revealUsername(event) {
    const confidentialInformation = event.target.value.replace(
      this.state.confidentialHeading,
      ""
    );
    //const zeroWidthUsername = confidentialInformation.replace(this.state.confidentialText, '');
    this.setState({
      //revealedUsername: zeroWidthToUsername(zeroWidthUsername),
      revealedUsername: zeroWidthToUsername(confidentialInformation),
      dontBelieve:
        "Don't believe me? Try pasting the text here again in a different browser or through incognito mode. "
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row-4">
            <h2>Enter Plain Message</h2>
            <PlainText
              heading={this.state.confidentialHeading}
              handleChange={this.getPlainText}
            />
          </div>

          <div className="row-4">
            <h2>Enter Hidden Message</h2>
            <UsernameInput
              username={this.state.username}
              handleChange={this.getUsername}
            />
          </div>

          <div className="row-4">
            <h2>Copy text below</h2>
            <ConfidentialText
              heading={this.state.confidentialHeading}
              //text={this.state.confidentialText}
              username={this.state.zeroWidthUsername}
            />
          </div>

          <div className="row-4">
            <h2>Paste Message</h2>
            <TextInput handleChange={this.revealUsername} />
          </div>

          <div className="row-4">
            <h2>Your Hidden Message</h2>
            <UsernameOutput username={this.state.revealedUsername} />
            {/*
            {this.state.dontBelieve && (
              <p className="text-muted">
                {this.state.dontBelieve}
                <a href="https://medium.com/@umpox/be-careful-what-you-copy-invisibly-inserting-usernames-into-text-with-zero-width-characters-18b4e6f17b66">
                  How does this work?
                </a>
              </p>
            )}
          */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
