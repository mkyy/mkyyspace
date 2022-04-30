import { useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { RestFromDiv } from '../../components/tools-components/RestFromDiv/RestFromDiv';
import { Wrapper, Nav, Content } from './style';

export const ToolsPage = () => {
  useEffect(() => {
    document.title = 'Tools - mkyy Space';
  });

  const [toolElement, setToolElement] = useState('');

  const handleClick = e => {
    let id = e.target.value;
    switch (id) {
      case 1:
        setToolElement(<RestFromDiv />);
        break;
      case 2:
        break;
      case 3:
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
