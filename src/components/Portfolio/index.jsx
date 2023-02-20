import { useEffect, useState } from 'react'
import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portfolioData from '../../data/portfolio.json'
import TSM from "../../assets/images/TSM-home.png"
import THP from "../../assets/images/THP-home.png"

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">

            <div className="image-box" >
              <img
                src={TSM}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">Truffières Saint-Martin</p>
                <h4 className="description">Rails,JS, HTML5 and CSS3</h4>
                <a href="https://warm-shore-71821.herokuapp.com/" target="_blank">
                <button className="btn" >
                  Voir
                </button>
                </a>
              </div>
            </div>
            <div className="image-box" >
              <img
                src={THP}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">The Hyper Progame</p>
                <h4 className="description">JS, HTML5 and CSS3</h4>
                <a href="https://pro-game-five.vercel.app/#pagelist" target="_blank">
                <button className="btn" >
                  Voir
                </button>
                </a>
              </div>
            </div>
          )
      </div>
      
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
