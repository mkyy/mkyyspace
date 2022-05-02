import { useRef } from 'react';
import { CalcButton } from '../../CalcButton/CalcButton';
import { InputN } from '../InputN/';
import styled from 'styled-components';

export const RegraDeTres = () => {
  const ref1 = useRef('');
  const ref2 = useRef('');
  const ref3 = useRef('');
  const ref4 = useRef('');

  const handleClick = () => {
    let a = ref1.current.value;
    let b = ref2.current.value;
    let c = ref3.current.value;
    let x = ref4.current.value;
    if (isNaN(a + b + c) || a === '' || b === '' || c === '') {
      ref4.current.value = '???';
    } else {
      ref4.current.value = (b * c) / a;
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <h2>Regra de 3 simples</h2>
      <p>Calcular o x na regra de 3 simples.</p>
      <DivContainer>
        <p>
          Lorem ipsum os numeros abaixo e clicar em "Calcular Resto", lembrando que não funciona
          para numeros fracionados.
        </p>
        <p>Resto da divisão de:</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <InputN reff={ref1} content={'a'} />
          esta para
          <InputN reff={ref2} content={'b'} />, assim como
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <InputN reff={ref3} content={'c'} />
          esta para
          <InputN reff={ref4} content={'X'} />
        </div>
        <CalcButton onClick={handleClick} content={'Calcular o "X"'} />
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
