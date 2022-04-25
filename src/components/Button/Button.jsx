import styled from 'styled-components'

export const Button = (props) => {
  return (
    <AnchorWrapper href={props.href}>
      <img src={props.img} alt='' />
      {props.content}
    </AnchorWrapper>
  )
}

const AnchorWrapper = styled.a`
  margin-right: 20px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  border-radius: 15px;

  img {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
`
