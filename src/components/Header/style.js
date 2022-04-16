import styled from 'styled-components'

export const SHeader = styled.header`
display:flex;
height: 9vh;
align-items: center;
justify-content: flex-end;
margin-right:30px;
/* background-color: ${props => props.theme.colors.secondary}; */

.custom-classname{
  margin-right: 50px;
}

.custom-classname.react-toggle--checked .react-toggle-track {
  background-color: ${props => props.theme.colors.primary};
}

.link{
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.primary};
    margin:0px 5px; 
    border-right: 2px solid ${props => props.theme.colors.text};
    border-bottom:2px solid ${props => props.theme.colors.text};
    padding:8px;

    &:hover{
        border-right: none;
        border-bottom: none;
        border-top:2px inset ${props => props.theme.colors.text};
        border-left:2px inset ${props => props.theme.colors.text};
    }
}

`;