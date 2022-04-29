import styled from 'styled-components';

export const ContactPageWrapper = styled.div`
  background-image: url('bg.jpg');
  background-position: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #131313;

  .btn {
    margin-bottom: 100px;
  }
`;

export const ImgHelmet = styled.img`
  width: 30%;
`;

export const DivFoot = styled.div`
  padding-top: 40px;
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
`;
