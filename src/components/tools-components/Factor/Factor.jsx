import { useRef } from 'react';
import { CalcButton } from '../../CalcButton/CalcButton';
import { InputN } from '../InputN/';
import styled from 'styled-components';

export const RestFromDiv = () => {
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
        <p>
          Basta digitar os numeros abaixo e clicar em "Calcular Resto", lembrando que não funciona para numeros
          fracionados.
        </p>
        <p>Resto da divisão de:</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <InputN reff={ref1} content={'dividendo'} />
          de
          <InputN reff={ref2} content={'divisor'} />
        </div>

        <CalcButton onClick={handleClick} content={'Calcular Resto'} />

        <textarea
          ref={txtAreaRef}
          style={{
            maxWidth: '95%',
            width: '95%',
            height: '200px',
            margin: '0 auto',
            display: 'block',
            fontSize: '1.2rem',
          }}
        />
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
