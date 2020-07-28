import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterStyle } from './footerStyle'

const Footer = () => {
    return (
        <FooterStyle>
            <div className="container socials">
                <a href="https://github.com/TheAkindele"><FaGithub /></a>
                <a href="https://twitter.com/MaverickHats"><FaTwitter /></a>
                <a href="https://www.linkedin.com/in/muhyideen-akindele-325722150/"> <FaLinkedin /> </a>
            </div>
            <div className="powered ">
                <a href="https://www.themoviedb.org/?language=en-US">
                    <p className='black-text'>powered by <span className="flow-text blue-text">TMDB</span></p>
                </a>
            </div>
        </FooterStyle>
    )
}

export default Footer
