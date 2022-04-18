import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primary};

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
      margin-bottom: 2px;
    }
  }

  .logo img {
    width: 150px;
    margin-left: 10px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: space-evenly;

    .logo img {
      margin: 5px auto;
    }
  }
`;
