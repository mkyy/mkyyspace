import styled from 'styled-components'

export const StyledImg = styled.img`
height: 90vh;
`;

export const PageSheet = styled.div`
width: 99vw;
height: 100vh;
position:relative;

&:nth-child(3){
    background-color: ${props => props.theme.colors.secondary};
}
&:nth-child(3)::before{
    content: " ";
    width: 0; height: 0;
    border-bottom: 50px solid #A6A6A8;
    border-left: 0px solid #000;
    border-right: 99vw solid transparent;
    position: absolute;
    top: -50px;
}
&:nth-child(3)::after{
    content: " ";
    width: 0; height: 0;
    border-top: 50px solid #A6A6A8;
    border-left: 99vw solid transparent;
    border-right: 0px solid transparent;
    position: absolute;
    bottom: -50px;
}
`;

export const Main = styled.main`
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

display:flex;
justify-content: space-evenly;

.text-box {
    width: 35vw;
    height: fit-content;
    margin-top: 20vh;

    font-size:1.4em;
    h1{
        font-size:1.2em;
    }
    span{
        color: ${props => props.theme.colors.primary};
        text-decoration: 2px dashed underline;
        font-family: 'Press Start 2P', cursive;
    }
}
`;

export const SecondPage = styled.div`
display:flex;
align-items: center;
justify-content: space-evenly;
height: 100%;
width: 100%;

.content-box{
    background-color: #C2BBF0;
    color: #000;
    padding: 30px 15px;
    width: 25vw;
    height: 30vh;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    border-radius: 20px;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    img{
        width: 80px;
        height: 80px;
        position:absolute;
        top:-40px;
    }
}
`;

export const ThirdPage = styled.div`
display:100%;
height:100%;
display:flex;
align-items: center;
justify-content: space-evenly;

.div-hex{
    position:relative;
}

.img1{
    position:absolute;
    z-index: 100;
    width:70px;
    height: 70px;
    left:143px;
    bottom:320px;
}
.img2{
    position:absolute;
    z-index: 100;
    width:70px;
    height: 70px;
    left:-90px;
    top:-80px;
}
.img3{
    position:absolute;
    z-index: 100;
    width:70px;
    height: 70px;
    left:380px;
    top:-80px;
}
.img4{
    position:absolute;
    z-index: 100;
    width:70px;
    height: 70px;
    left:380px;
    bottom:-60px;
}
.img5{
    position:absolute;
    z-index: 100;
    width:70px;
    height: 60px;
    left:-90px;
    bottom:-60px;
}
.img6{
    position:absolute;
    z-index: 100;
    width:100px;
    height: 60px;
    right:130px;
    top:320px;
}

.astro-img{
    position:absolute;
    height: 200px;
    bottom:15px;
    left:75px;
}

.slider-container{
    height: 65vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
`;

export const Hexagon = styled.div`
&:before{
    content: " ";
    width: 0; height: 0;
    border-bottom: 90px solid #BA68C8;
    border-left: 178px solid transparent;
    border-right: 178px solid transparent;
    position: absolute;
    top: -90px;
}

width: 356px;
height: 210px;
background-color: #BA68C8;
position: relative;

&:after{
    content: "";
    width: 0;
    position: absolute;
    bottom: -90px;
    border-top: 90px solid #BA68C8;
    border-left: 178px solid transparent;
    border-right: 178px solid transparent;
}

`;

export const Slider = styled.ul`
display: block;
height: 150px;
width: 400px;
position: relative;
background-color: #999;
border-radius: 30px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

li{
    list-style: none;
    position: relative;
    
    p{
        opacity:0;
        visibility: hidden;
        z-index: 10;
        padding: 20px;
        position: absolute;
    }

    input{
        display:none;    
    }
    label{
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

    &:nth-child(1) label{
        left:10px;
    }
    &:nth-child(2) label{
        left:40px;
    }

    input:checked ~ p{
        opacity: 1;
        visibility: visible;
    }
    input:checked ~ label{
        background-color: #000;
    }
}
`;

export const ContactSection = styled.section`
background-color: #A6A6A8;
display:flex;
justify-content: space-evenly;
align-items: center;
width: 100%;
padding: 90px 0px;
position:relative;

img{
    width:40vw;
}

h1{
    font-size: 2rem;
    position:absolute;
    top:0;
    left:35%;
}

`;