import React from 'react';
import NotificationMessage from 'components/notification/notification';
import ValueList from 'components/valuelist/valuelist';
import { StatisticContainer, SeccondaryTitle } from './values.styled';

class Values extends React.Component {
  static defaultProps = {
    initialValueTotal: 0,
    initialValuePositivePercentage: 0,
    notificationMessage: 'There is no feedback',
  };

  state = {
    total: this.props.initialValueTotal,
    positivePercentage: this.props.initialValuePositivePercentage,
  };

  countTotalFeedback = () => {
    this.setState(prevState => ({
      total: prevState.total + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => ({
      positivePercentage: Math.round(
        (this.props.goodValue / prevState.total) * 100
      ),
    }));
  };

  render() {
    return (
      <StatisticContainer>
        <SeccondaryTitle>Statistics</SeccondaryTitle>
        {this.state.total !== 0 ? (
          <NotificationMessage message={this.props.notificationMessage} />
        ) : (
          <ValueList
            goodValue={this.props.goodValue}
            neutralValue={this.props.neutralValue}
            badValue={this.props.badValue}
            totalValue={this.state.total}
            positivePercentageValue={this.state.positivePercentage}
          />
        )}
      </StatisticContainer>
    );
  }
}

// const Values = ({
//   goodValue,
//   neutralValue,
//   badValue,
//   totalValue,
//   positivePercentageValue,
//   message,
// }) => {
//   return (
//     <StatisticContainer>
//       <SeccondaryTitle>Statistics</SeccondaryTitle>
//       {totalValue === 0 ? (
//         <NotificationMessage message={message} />
//       ) : (
//         <ValueList
//           goodValue={goodValue}
//           neutralValue={neutralValue}
//           badValue={badValue}
//           totalValue={totalValue}
//           positivePercentageValue={positivePercentageValue}
//         />
//       )}
//     </StatisticContainer>
//   );
// };

export default Values;
