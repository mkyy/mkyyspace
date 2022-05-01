import styled from 'styled-components';

export const SHeader = styled.header`
  display: flex;
  height: 9vh;
  align-items: center;
  justify-content: flex-end;
  padding-right: 30px;
  background-color: ${props => props.theme.colors.secondary};

  .custom-classname {
    margin-right: 50px;
  }

  .custom-classname.react-toggle--checked .react-toggle-track {
    background-color: ${props => props.theme.colors.primary};
  }

  .link {
    position: relative;
    display: inline-block;
    font-size: 1.1em;
    color: #555;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s;
    padding: 5px 9px;

    &::after {
      position: absolute;
      content: '';
      top: 100%;
      left: 0;
      width: 100%;
      height: 3px;
      background: #3498db;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.5s;
    }

    &:hover {
      opacity: 1;
      color: #008cba;
    }

    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
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
