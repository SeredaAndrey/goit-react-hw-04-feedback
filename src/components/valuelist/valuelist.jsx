import React from 'react';
import { List, Item, Value } from './valuelist.styled';

const ValueList = ({
  goodValue,
  neutralValue,
  badValue,
  totalValue,
  positivePercentageValue,
}) => {
  return (
    <List>
      <Item color="good">
        Good <Value> {goodValue}</Value>
      </Item>
      <Item color="neutral">
        Neutral <Value> {neutralValue}</Value>
      </Item>
      <Item color="bad">
        Bad <Value> {badValue}</Value>
      </Item>
      <Item>
        Total <Value> {totalValue}</Value>
      </Item>
      <Item>
        Positive feedback <Value> {positivePercentageValue} %</Value>
      </Item>
    </List>
  );
};

export default ValueList;
