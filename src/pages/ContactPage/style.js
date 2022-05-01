import styled from 'styled-components';

export const ContactPageWrapper = styled.div`
  background-image: url('bg.jpg');
  background-size: cover;
  background-position: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #131313;

  .btn {
    margin-left: 70px;
  }
`;

export const ImgHelmet = styled.img`
  width: 30%;
`;

export const DivFoot = styled.div`
  padding-top: 40px;
  background-color: ${props => props.theme.colors.highlight};
  display: flex;
  align-items: center;
`;
