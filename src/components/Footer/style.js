import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: space-evenly;
  background-color: ${props => props.theme.colors.secondary};
  padding-top: 40px;

  .contato {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
    color: #000;
    font-weight: bold;

    a {
      color: #000;
      font-weight: normal;
      padding-left: 20px;
      text-decoration: none;
      margin-bottom: 10px;
      transition: 0.3s;

      &:hover {
        color: #ddd;
      }
    }
  }

  .menu {
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 20px;
    color: #000;
    font-weight: bold;

    .link {
      color: #000;
      font-weight: normal;
      padding-left: 20px;
      text-decoration: none;
      margin-bottom: 10px;
      transition: 0.3s;

      &:hover {
        color: #ddd;
      }
    }
  }

  .i-data {
    display: flex;
    align-items: center;
    img {
      margin-right: 30px;
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: space-evenly;

    .logo img {
      margin: 5px auto;
    }
  }
`;
