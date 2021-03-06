import styled from 'styled-components';

export const Button = props => {
  return (
    <AnchorWrapper href={props.href}>
      <img src={props.img} alt='' />
      {props.content}
    </AnchorWrapper>
  );
};

const AnchorWrapper = styled.a`
  margin-right: 20px;
  padding: 15px 40px;
  background-color: transparent;
  text-decoration: none;
  color: #131313;
  border-radius: 15px;
  transition: all 0.4s ease;
  width: fit-content;
  height: fit-content;
  display: inline-block;
  font-size: 1.3rem;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
    transform: scale(1.2);
  }

  img {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
`;
