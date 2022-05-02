import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Nav = styled.ul`
  width: 20vw;
  margin-right: 30px;
  padding: 0px;

  li {
    list-style-type: none;
    border-bottom: 1px solid #ddd;
    padding: 7px 0px;
    position: relative;

    &:after {
      content: '⋗';
      font-size: 1em;
      position: absolute;
      right: 0;
      font-weight: 100;
    }

    &:hover {
      cursor: pointer;
      background-color: ${props => props.theme.colors.highlight};

      &::after {
        color: #008cba;
        font-weight: 900;
      }
    }
  }
`;

export const Content = styled.div`
  width: 60vw;
  min-height: 91vh;
  padding: 40px 30px;
  background-color: ${props => props.theme.colors.highlight};
`;
