import styled from "styled-components";

export const FormForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 35vw;
  margin-top: 10vh;

  h1 {
    font-size: 2em;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      margin-bottom: 15px;
      border-radius: 5px;
    }

    textarea {
      border-radius: 5px;
    }

    button {
      width: fit-content;
      align-self: center;
      margin-top: 15px;
      cursor: pointer;
      padding: 10px;
      background-color: #d9e5d6;
      border-radius: 15px;
      border: none;
      font-size: 1.2rem;

      &:hover {
        background-color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  @media (max-width: 425px) {
    width: 90vw;
    margin-top: 2vh;
  }
`;
