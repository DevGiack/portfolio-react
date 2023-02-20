import LogoTitle from "../../assets/images/logo-j.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import Logo from "./Logo"
import "./index.scss"
import Loader from "react-loaders"

const Home = () => {
        const [letterClass, setLetterClass] = useState('text-animate') 
        const nameArray = ['a', 'c', 'c', 'o', 'm', 'o']
        const jobArray = [ 'D', 'é', 'v', 'e', 'l', 'o', 'p','p', 'e','u', 'r', ' ','w', 'e', 'b']

useEffect(() => {
        setTimeout(() => {
                setLetterClass('text-animate-hover')
        }, 4000)
        }, [])

        return (
                <>
                <div className="container home-page">
                        <div className="text-zone">
                                <h1>
                                        <span className={letterClass}>B</span>
                                        <span className={`${letterClass} _12`}>o</span>
                                        <span className={`${letterClass} _13`}>n</span>
                                        <span className={`${letterClass} _14`}>j</span>
                                        <span className={`${letterClass} _15`}>o</span>
                                        <span className={`${letterClass} _16`}>u</span>
                                        <span className={`${letterClass} _17`}>r,</span>
                                <br />
                                        <span className={`${letterClass} _18`}>J</span>
                                        <span className={`${letterClass} _19`}>e</span>
                                        <span className={`${letterClass} _20`}> </span>
                                        <span className={`${letterClass} _21`}>s</span>
                                        <span className={`${letterClass} _22`}>u</span>
                                        <span className={`${letterClass} _23`}>i</span>
                                        <span className={`${letterClass} _24`}>s</span>
                                         <img src={LogoTitle} alt="developer" />
                                        <AnimatedLetters 
                                        letterClass={letterClass}
                                        strArray={nameArray}
                                        idx={15} 
                                        />
                                <br />
                                        <AnimatedLetters 
                                        letterClass={letterClass}
                                        strArray={jobArray}
                                        idx={21} 
                                        />
                                </h1>
                                <h2>FULLSTACK</h2>
                                <Link to="/contact" className="flat-button">CONTACTEZ MOI</Link>
                        </div>
                        <Logo />
                </div>
                <Loader type="pacman" />
                </>
        )
}

export default Home