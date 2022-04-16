import { FooterWrapper } from "./style"

export const Footer = () => {
    return(
        <FooterWrapper>

            <div className="logo">
                <img src="MAIKY_logo-removebg.png" alt="" />
            </div>

            <p>© Copyright Maiky Roger</p>

            <div className="contato">
                <p>Entre em contato</p>
                <a href="">Linkedin</a>
                <a href="">Github</a>
                <a href="">Instagram</a>
            </div>

        </FooterWrapper>
    )
}