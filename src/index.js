import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import { CSSTransitionGroup } from "react-transition-group";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false
    };

    this.clickMe.bind(this);
  }

  clickMe() {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render() {
    return (
      <div style={styles}>
        <CSSTransitionGroup
          transitionName="timeslot"
          component="div"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={600}
        >
          <div
            className={`timeslot-container timeslot-container-${
              this.state.isVisible
            }`}
            key={"thing" + this.state.isVisible}
          >
            <div>
              <Hello name="CodeSandbox" />
              <h2>Start editing to see some magic happen {"\u2728"}</h2>
            </div>
          </div>
        </CSSTransitionGroup>
        <button onClick={() => this.clickMe()}>Click Me!</button>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
