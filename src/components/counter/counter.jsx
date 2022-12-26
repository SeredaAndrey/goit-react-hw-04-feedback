import Controls from 'components/controls/controls';
import Values from 'components/values/values';
import { useState } from 'react';

export default function Counter() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrementGood = () => {
    setGood(state => state + 1);
  };
  const handleIncrementNeutral = () => {
    setNeutral(state => state + 1);
  };
  const handleIncrementNegative = () => {
    setBad(state => state + 1);
  };

  return (
    <div className="counter">
      <Controls
        onIncrementGood={handleIncrementGood}
        onIncrementNeutral={handleIncrementNeutral}
        onIncrementBad={handleIncrementNegative}
      />
      <Values goodValue={good} neutralValue={neutral} badValue={bad} />
    </div>
  );
}

// class Counter extends React.Component {
//   static defaultProps = {
//     initialValueGood: 0,
//     initialValueNeutral: 0,
//     initialValueBad: 0,
//   };

//   state = {
//     good: this.props.initialValueGood,
//     neutral: this.props.initialValueNeutral,
//     bad: this.props.initialValueBad,
//   };

//   handleIncrementGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };

//   handleIncrementNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };

//   handleIncrementNegative = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   render() {
//     return (
//   <div className="counter">
//     <Controls
//       onIncrementGood={this.handleIncrementGood}
//       onIncrementNeutral={this.handleIncrementNeutral}
//       onIncrementBad={this.handleIncrementNegative}
//     />
//     <Values
//       goodValue={this.state.good}
//       neutralValue={this.state.neutral}
//       badValue={this.state.bad}
//     />
//   </div>
// );
//   }
// }

// export default Counter;
