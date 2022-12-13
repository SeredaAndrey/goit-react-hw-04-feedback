import React from 'react';
import Controls from 'components/controls/controls';
import Values from 'components/values/values';

class Counter extends React.Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
    initialValueTotal: 0,
    initialValuePositivePercentage: 0,
    notificationMessage: 'There is no feedback',
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
    // this.countTotalFeedback();
    // this.countPositiveFeedbackPercentage();
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
    // this.countTotalFeedback();
    // this.countPositiveFeedbackPercentage();
  };

  handleIncrementNegative = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
    // this.countTotalFeedback();
    // this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div className="counter">
        <Controls
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementNegative}
        />
        <Values
          goodValue={this.state.good}
          neutralValue={this.state.neutral}
          badValue={this.state.bad}
        />
      </div>
    );
  }
}

export default Counter;
