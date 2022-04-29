import styled from 'styled-components';

export const InputN = props => {
  return (
    <Container>
      <input ref={props.reff} type='text' name='num' id='num' />
      <br />
      <label htmlFor='num'> {props.content} </label>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 10px;
  text-align: center;
  label {
    font-size: 0.6rem;
  }

  input {
    width: 120px;
    height: 40px;
    background-color: #e7ffe9;
  }
`;
