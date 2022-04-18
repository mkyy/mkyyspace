import { FooterWrapper } from "./style";

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="logo">
        <img src="MAIKY_logo-removebg.png" alt="" />
      </div>

      <p>© Copyright Maiky Roger</p>

      <div className="contato">
        <p>Entre em contato</p>
        <a href="https://www.linkedin.com/in/maikyroger/">Linkedin</a>
        <a href="github.com/mkyy">Github</a>
        <a href="https://www.instagram.com/deoklin/">Instagram</a>
      </div>
    </FooterWrapper>
  );
};
