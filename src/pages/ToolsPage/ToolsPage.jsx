import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { RestFromDiv } from '../../components/tools-components/RestFromDiv/RestFromDiv';
import { Factor } from '../../components/tools-components/Factor/';
import { Wrapper, Nav, Content } from './style';
import { RegraDeTres } from '../../components/tools-components/RegraDeTres/RegraDeTres';

export const ToolsPage = () => {
  useEffect(() => {
    document.title = 'Tools | mkyy Space';
  });

  const [toolElement, setToolElement] = useState('');

  const handleClick = e => {
    let id = e.target.value;
    switch (id) {
      case 1:
        setToolElement(<RestFromDiv />);
        break;
      case 2:
        setToolElement(<Factor />);
        break;
      case 3:
        setToolElement(<RegraDeTres />);
        break;
    }
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Nav>
          <h3>MATEMÁTICA</h3>
          <li onClick={handleClick} value={1}>
            Resto da Divisão
          </li>
          <li onClick={handleClick} value={2}>
            Fatorar Número
          </li>
          <li onClick={handleClick} value={3}>
            Regra de 3
          </li>
        </Nav>

        <Content>{toolElement}</Content>
      </Wrapper>
    </>
  );
};
