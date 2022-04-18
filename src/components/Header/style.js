import styled from "styled-components";

export const SHeader = styled.header`
  display: flex;
  height: 9vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  background-color: ${(props) => props.theme.colors.secondary};

  .custom-classname {
    margin-right: 50px;
  }

  .custom-classname.react-toggle--checked .react-toggle-track {
    background-color: ${(props) => props.theme.colors.primary};
  }

  .link {
    font-size: 1.2rem;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    margin: 0px 5px;
    padding: 8px;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (max-width: 425px) {
    justify-content: space-between;
    margin: 0;
    padding: 0;

    .custom-classname {
      margin: 0;
    }
    .link {
      margin: 0px;
      padding: 0px 2px;
      font-size: 1em;
    }
  }
`;
