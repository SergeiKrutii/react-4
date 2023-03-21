// import Feedback from "./Feedback/Feedback";
import React, { Component } from "react";
// import Phonebook from "./Phonebook/Phonebook";
import FeedbackOptions from "./Feedback/FeedbackOptions/FeedbackOptions";
import Statistics from "./Feedback/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (props) => {
    this.setState((prevState) => ({
      [props]: prevState[props] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const total = Object.values(this.state).reduce((acc, elem) => acc + elem);
    const positivePercentage = Math.round((good / total) * 100) || 0;

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleIncrement}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      </>
    );
  }
}
export default App;
