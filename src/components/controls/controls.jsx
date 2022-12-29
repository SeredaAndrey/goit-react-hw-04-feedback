import React from 'react';

import PropTypes from 'prop-types';

import {
  ControlsContainer,
  PrimaryTitle,
  ControlsButton,
} from './controls.styled';

const Controls = ({ onIncrement }) => {
  return (
    <ControlsContainer>
      <PrimaryTitle>Please leave feedback</PrimaryTitle>
      <div>
        <ControlsButton
          name="good"
          type="button"
          onClick={() => onIncrement('good')}
        >
          Good
        </ControlsButton>
        <ControlsButton
          name="neutral"
          type="button"
          onClick={() => onIncrement('neutral')}
        >
          Neutral
        </ControlsButton>
        <ControlsButton
          name="bad"
          type="button"
          onClick={() => onIncrement('bad')}
        >
          Bad
        </ControlsButton>
      </div>
    </ControlsContainer>
  );
};

export default Controls;

Controls.prototype = {
  onIncrementGood: PropTypes.number.isRequired,
  onIncrementNeutral: PropTypes.number.isRequired,
  onIncrementBad: PropTypes.number.isRequired,
};
