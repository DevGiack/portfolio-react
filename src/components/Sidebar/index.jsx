import './index.scss'
import LogoJ from '../../assets/images/logo-j.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { Link, NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
        return (
                <div className='nav-bar'>
                        <Link className="logo" to="/">
                        <img src={LogoJ} alt="logo" />
                        <img className='sub-logo' src={LogoSubtitle} alt="Jaccomo" />
                        </Link>
                        <nav>
                                <NavLink
                                 exact="true" 
                                 activeclassname="active" 
                                 to="/"
                                 >
                                        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                                </NavLink>
                                <NavLink 
                                exact="true" 
                                activeclassname="active" 
                                className="about-link" 
                                to="/about"
                                >
                                        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                                </NavLink>
                                <NavLink
                                exact="true" 
                                activeclassname="active" 
                                className="contact-link" 
                                to="/contact"
                                >
                                        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                                </NavLink>
                        </nav>
                        <ul>
                                <li>
                                        <a 
                                        target="_blank" 
                                        rel='noreferrer' 
                                        href='https://www.linkedin.com/in/jaccomo-de-gregorio-333aa2251/'
                                        >
                                                <FontAwesomeIcon icon={ faLinkedin } color="#4d4d4e" />
                                        </a>
                                </li>
                                <li>
                                        <a 
                                        target="_blank" 
                                        rel='noreferrer' 
                                        href='https://github.com/DevGiack'
                                        >
                                                <FontAwesomeIcon icon={ faGithub } color="#4d4d4e" />
                                        </a>
                                </li>
                                <li>
                                        <a 
                                        target="_blank" 
                                        rel='noreferrer' 
                                        href='https://twitter.com/DevGiack/'
                                        >
                                                <FontAwesomeIcon icon={ faTwitter } color="#4d4d4e" />
                                        </a>
                                </li>
                                <li>
                                        <a 
                                        target="_blank" 
                                        rel='noreferrer' 
                                        href='https://discordapp.com/users/DevGiack#9658/'
                                        >
                                                <FontAwesomeIcon icon={ faDiscord } color="#4d4d4e" />
                                        </a>
                                </li>
                        </ul>
                </div>
        )
}

export default Sidebar