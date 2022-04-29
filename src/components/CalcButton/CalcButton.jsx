import styled from 'styled-components';

export const CalcButton = props => {
  return <Button onClick={props.onClick}>{props.content}</Button>;
};

const Button = styled.button`
  border: none;
  padding: 20px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: block;
  margin: 20px auto 30px auto;
  &:hover {
    cursor: pointer;
    background-color: #ba00c8;
  }
`;
