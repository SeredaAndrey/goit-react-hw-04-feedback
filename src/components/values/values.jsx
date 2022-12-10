import React from 'react';
import NotificationMessage from 'components/notification/notification';
import ValueList from 'components/valuelist/valuelist';
import { StatisticContainer, SeccondaryTitle } from './values.styled';

const Values = ({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  positivePercentageValue,
  message,
}) => {
  return (
    <StatisticContainer>
      <SeccondaryTitle>Statistics</SeccondaryTitle>
      {totalValue === 0 ? (
        <NotificationMessage message={message} />
      ) : (
        <ValueList
          goodValue={goodValue}
          neutralValue={neutralValue}
          badValue={badValue}
          totalValue={totalValue}
          positivePercentageValue={positivePercentageValue}
        />
      )}
    </StatisticContainer>
  );
};

export default Values;
