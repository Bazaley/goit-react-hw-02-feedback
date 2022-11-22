import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 0 auto;
`;

const Button = styled.button`
  min-width: 100px;
  padding: 10px 0;
  border-radius: 4px;
  border: none;
  background-color: #9c9ce5;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 250ms linear, color 250ms linear;

  &:hover,
  &:focus {
    color: black;
    background-color: #a1ced8;
  }
`;

export { ButtonBox, Button };
