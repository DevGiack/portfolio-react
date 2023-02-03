import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faGitAlt, faHtml5, faNodeJs, faReact, faCss3, faJsSquare } from "@fortawesome/free-brands-svg-icons";

const About = () => {

        const [letterClass, setLetterClass] = useState('text-animate') 

        useEffect(() => {
                setTimeout(() => {
                        setLetterClass('text-animate-hover')
                }, 3000)
                }, [])

        return (
                <div className="container about-page">
                        <div className="text-zone">
                                <h1>
                                        <AnimatedLetters 
                                        letterClass={letterClass}
                                        strArray={['A','b','o','u','t',' ','m','e']}
                                        idx={15}
                                        />
                                </h1>
                                <p>At the age of 35, I am reinventing my career by transitioning from the world of commerce to web development. </p>
                                <p>My enthusiasm for technology is unwavering and I am passionate about the endless opportunities for growth and development that this field offers.</p>
                                <p>I am proud of myself for taking this courageous decision and I am eager to see where it will lead me in the future.</p>
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
        )
}

export default About