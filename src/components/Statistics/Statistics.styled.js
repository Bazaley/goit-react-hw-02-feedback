import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  width: 500px;
  margin: 0 auto;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc((100% - 100px) / 3);
  height: 63px;
  padding: 10px 0;
  border-radius: 50%;
  border: none;
  background-color: #9c9ce5;
  color: white;
  margin: 10px 0;

  &:not(:nth-child(3n)) {
    margin-right: 50px;
  }
`;

const Good = styled(Item)`
  background-color: #57a057;
`;
const Neutral = styled(Item)`
  background-color: #b6b65a;
`;

const Bad = styled(Item)`
  background-color: #e45959;
`;

export { List, Item, Good, Neutral, Bad };
