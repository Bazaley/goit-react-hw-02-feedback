import { List, Item, Good, Neutral, Bad } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <List>
      <Good>Good: {good}</Good>
      <Neutral>Neutral: {neutral}</Neutral>
      <Bad>Bad: {bad}</Bad>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positiveFeedback}%</Item>
    </List>
  );
};
