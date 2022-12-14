import React from 'react';
import NotificationMessage from 'components/notification/notification';
import ValueList from 'components/valuelist/valuelist';
import { StatisticContainer, SeccondaryTitle } from './values.styled';

const Values = ({ goodValue, neutralValue, badValue }) => {
  return (
    <StatisticContainer>
      <SeccondaryTitle>Statistics</SeccondaryTitle>
      {goodValue + neutralValue + badValue === 0 ? (
        <NotificationMessage message="There is no feedback" />
      ) : (
        <ValueList
          goodValue={goodValue}
          neutralValue={neutralValue}
          badValue={badValue}
          totalValue={goodValue + neutralValue + badValue}
          positivePercentageValue={Math.round(
            (goodValue / (goodValue + neutralValue + badValue)) * 100
          )}
        />
      )}
    </StatisticContainer>
  );
};

export default Values;
