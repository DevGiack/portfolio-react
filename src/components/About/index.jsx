import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGitAlt,
  faHtml5,
  faNodeJs,
  faReact,
  faCss3,
  faJsSquare,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', ' ', 'p', 'r', 'o', 'p', 'o', 's']}
              idx={15}
            />
          </h1>
          <p>
            À 35 ans, je fais un pas audacieux en réinventant ma carrière et en
            me lançant dans le monde passionnant du développement web, après
            plusieurs années passées dans le commerce.
            <br />
            <br />
            Je suis animé par un enthousiasme inébranlable pour la technologie
            et les multiples possibilités de croissance et de développement
            qu'elle offre.
            <br />
            <br />
            Je suis impatient de découvrir où cette aventure m'emmènera et je
            suis prêt à relever tous les défis pour réussir en tant que
            développeur web.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#5d5d5d" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4f4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFFD81" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#Ec4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
