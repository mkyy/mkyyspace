import styled from 'styled-components'

export const FooterWrapper = styled.footer`
display:flex;
align-items: center;
justify-content: space-between;
background-color: ${props => props.theme.colors.primary};

.contato{
    display:flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;

    a{
        padding-left:20px;
        color: #000;
        text-decoration: none;
        margin-bottom: 2px;
    }
}

.logo img {
    width: 150px;
    margin-left:10px;
}
`;