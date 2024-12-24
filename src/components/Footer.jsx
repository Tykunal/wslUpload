import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer(){
    return (
        <footer>
            <div className="footer-icon">
                <a className="icon" href="https://www.linkedin.com/in/tykunal">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="icon" href="https://www.github.com/tykunal">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="icon" href="https://twitter.com/tykunal07">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <p className="copyright"> © kunal tyagi</p>
            </div>
        </footer>
    )
}

export default Footer;