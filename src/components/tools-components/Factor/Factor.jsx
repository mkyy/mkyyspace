import { useRef } from 'react';
import { CalcButton } from '../../CalcButton/CalcButton';
import { InputN } from '../InputN/';
import styled from 'styled-components';

export const Factor = () => {
  const ref1 = useRef('');
  const ref2 = useRef('');
  const txtAreaRef = useRef('');

  const handleClick = () => {
    let n1 = ref1.current.value;
    let n2 = ref2.current.value;
    if (isNaN(n1) || isNaN(n2)) {
      txtAreaRef.current.value = 'Você precisa digitar valores númericos.';
    } else {
      txtAreaRef.current.value = `O resto da divisão é: ${Math.floor(n1 % n2)} 
O resultado da divisão é: ${Math.floor(n1 / n2)}`;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <h2>Fatorar número</h2>
      <p>Calculadora de fatoração</p>
      <DivContainer>
        <p>em breve...</p>
      </DivContainer>
    </div>
  );
};

const DivContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 15px;
  padding: 20px;
  color: #131313;
`;
