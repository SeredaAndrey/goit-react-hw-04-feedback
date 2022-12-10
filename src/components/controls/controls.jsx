import React from 'react';
import {
  ControlsContainer,
  PrimaryTitle,
  ControlsButton,
} from './controls.styled';

const Controls = ({ onIncrementGood, onIncrementNeutral, onIncrementBad }) => {
  return (
    <ControlsContainer>
      <PrimaryTitle>Please leave feedback</PrimaryTitle>
      <div>
        <ControlsButton color="good" type="button" onClick={onIncrementGood}>
          Good
        </ControlsButton>
        <ControlsButton
          color="neutral"
          type="button"
          onClick={onIncrementNeutral}
        >
          Neutral
        </ControlsButton>
        <ControlsButton color="bad" type="button" onClick={onIncrementBad}>
          Bad
        </ControlsButton>
      </div>
    </ControlsContainer>
  );
};

export default Controls;
