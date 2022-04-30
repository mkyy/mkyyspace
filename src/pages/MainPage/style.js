import styled from 'styled-components';

export const StyledImg = styled.img`
  width: 35vw;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 425px) {
    width: 100%;
    height: 70vh;
  }
`;

export const PageSheet = styled.div`
  width: 99vw;
  height: 100vh;
  position: relative;

  @media (max-width: 425px) {
    height: 150vh;
  }

  &:nth-child(3) {
    background-color: ${props => props.theme.colors.highlight};
  }
  &:nth-child(3)::before {
    content: ' ';
    width: 0;
    height: 0;
    border-bottom: 50px solid ${props => props.theme.colors.highlight};
    border-right: 99vw solid transparent;
    position: absolute;
    top: -50px;
  }
  &:nth-child(3)::after {
    content: ' ';
    width: 0;
    height: 0;
    border-top: 50px solid ${props => props.theme.colors.highlight};
    border-left: 99vw solid transparent;
    position: absolute;
    bottom: -50px;
  }
`;

export const Main = styled.main`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  display: flex;
  justify-content: space-around;
  width: 100%;

  .text-box {
    width: 35vw;
    height: fit-content;
    margin-top: 20vh;
    margin-left: 5vw;

    font-size: 1.2em;
    h1 {
      font-size: 1.4em;
    }
    span {
      color: ${props => props.theme.colors.primary};
      text-decoration: 2px dashed underline;
      font-family: 'Press Start 2P', cursive;
    }

    .link-btn {
      margin-right: 20px;
      padding: 15px 40px;
      background-color: ${props => props.theme.colors.highlight};
      text-decoration: none;
      color: ${props => props.theme.colors.text};
      border-radius: 15px;
      transition: all 0.4s ease;
      width: fit-content;
      height: fit-content;
      display: inline-block;

      &:hover {
        background-color: ${props => props.theme.colors.primary};
        transform: scale(1.2);
      }

      img {
        height: 15px;
        width: 15px;
        margin-right: 10px;
      }
    }
  }

  @media (max-width: 425px) {
    justify-content: inherit;
    flex-direction: column;
    .text-box {
      width: 90vw;
      margin: 0 auto;
      z-index: 10;
      margin: 0px 10px;
    }
  }
`;

export const SecondPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;

  .content-box {
    background-color: #c2bbf0;
    color: #000;
    padding: 30px 15px;
    width: 25vw;
    height: 30vh;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img {
      width: 80px;
      height: 80px;
      position: absolute;
      top: -40px;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;

    .content-box {
      width: 90vw;
      height: fit-content;
      padding: 0px 15px;

      img {
        width: 40px;
        height: 40px;
        top: -20px;
      }
    }
  }
`;

export const ThirdPage = styled.div`
  display: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .div-hex {
    position: relative;
  }

  .img1 {
    position: absolute;
    z-index: 100;
    width: 70px;
    height: 70px;
    left: 143px;
    bottom: 320px;
  }
  .img2 {
    position: absolute;
    z-index: 100;
    width: 70px;
    height: 70px;
    left: -90px;
    top: -80px;
  }
  .img3 {
    position: absolute;
    z-index: 100;
    width: 70px;
    height: 70px;
    left: 380px;
    top: -80px;
  }
  .img4 {
    position: absolute;
    z-index: 100;
    width: 70px;
    height: 70px;
    left: 380px;
    bottom: -60px;
  }
  .img5 {
    position: absolute;
    z-index: 100;
    width: 70px;
    height: 60px;
    left: -90px;
    bottom: -60px;
  }
  .img6 {
    position: absolute;
    z-index: 100;
    width: 100px;
    height: 60px;
    right: 130px;
    top: 320px;
  }

  .astro-img {
    position: absolute;
    height: 200px;
    bottom: 15px;
    left: 75px;
  }

  .slider-container {
    height: 65vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: space-between;

    .div-hex {
      margin-top: 35vh;
    }

    .img1 {
      width: 50px;
      height: 50px;
      left: 65px;
      bottom: 160px;
    }
    .img2 {
      width: 50px;
      height: 50px;
      left: -60px;
      top: -50px;
    }
    .img3 {
      width: 50px;
      height: 50px;
      left: 180px;
      top: -50px;
    }
    .img4 {
      width: 50px;
      height: 50px;
      left: 180px;
      bottom: -20px;
    }
    .img5 {
      width: 50px;
      height: 40px;
      left: -60px;
      bottom: -25px;
    }
    .img6 {
      width: 90px;
      height: 50px;
      right: 45px;
      top: 160px;
    }

    .astro-img {
      height: 100px;
      bottom: 5px;
      left: 36px;
    }
  }
`;

export const Hexagon = styled.div`
  &:before {
    content: ' ';
    width: 0;
    height: 0;
    border-bottom: 90px solid #ba68c8;
    border-left: 178px solid transparent;
    border-right: 178px solid transparent;
    position: absolute;
    top: -90px;
  }

  width: 356px;
  height: 210px;
  background-color: #ba68c8;
  position: relative;

  &:after {
    content: '';
    width: 0;
    position: absolute;
    bottom: -90px;
    border-top: 90px solid #ba68c8;
    border-left: 178px solid transparent;
    border-right: 178px solid transparent;
  }

  @media (max-width: 425px) {
    &:before {
      content: ' ';
      width: 0;
      height: 0;
      border-bottom: 45px solid #ba68c8;
      border-left: 89px solid transparent;
      border-right: 89px solid transparent;
      position: absolute;
      top: -45px;
    }

    width: 178px;
    height: 105px;
    background-color: #ba68c8;
    position: relative;

    &:after {
      content: '';
      width: 0;
      position: absolute;
      bottom: -45px;
      border-top: 45px solid #ba68c8;
      border-left: 89px solid transparent;
      border-right: 89px solid transparent;
    }
  }
`;

export const Slider = styled.ul`
  display: block;
  height: 150px;
  width: 400px;
  position: relative;
  background-color: ${props => props.theme.colors.highlight};
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: ${props => props.theme.colors.text};

  li {
    list-style: none;
    position: relative;

    p {
      opacity: 0;
      visibility: hidden;
      z-index: 10;
      padding: 20px;
      position: absolute;
    }

    input {
      display: none;
    }
    label {
      background-color: #444;
      bottom: -120px;
      cursor: pointer;
      display: block;
      height: 15px;
      position: absolute;
      width: 15px;
      z-index: 10;
      border-radius: 50%;
    }

    &:nth-child(1) label {
      left: 10px;
    }
    &:nth-child(2) label {
      left: 40px;
    }

    input:checked ~ p {
      opacity: 1;
      visibility: visible;
    }
    input:checked ~ label {
      background-color: #000;
    }
  }

  @media (max-width: 425px) {
    width: 90vw;
    li p {
      padding: 0;
    }
  }
`;

export const ContactSection = styled.section`
  background-color: ${props => props.theme.colors.highlight};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 90px 0px;
  position: relative;

  img {
    width: 40vw;
  }

  h1 {
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 35%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    padding: 10px;
    h1 {
      position: inherit;
      left: 0;
      text-align: center;
    }
    img {
      width: 50vw;
    }
  }
`;
export const DivFoot = styled.div`
  background-color: ${props => props.theme.colors.highlight};
  display: flex;
  align-items: center;
`;
