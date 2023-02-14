import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'C',
                'o',
                'n',
                't',
                'a',
                'c',
                't',
                'e',
                'z',
                ' ',
                'm',
                'o',
                'i',
              ]}
              idx={15}
            />
          </h1>
          <p>
            Passionné par le développement web, je suis actuellement en
            reconversion professionnelle pour devenir développeur fullstack.
            Pour valider mon diplôme, je suis à la recherche d'un stage de 2
            mois afin d'acquérir une expérience pratique dans ce domaine
            passionnant. <br />
            <br />
            Je suis motivé, sérieux et désireux d'apprendre autant que possible.
            Je suis convaincu que ce stage me permettra d'acquérir les
            compétences dont j'ai besoin pour réussir dans cette industrie en
            constante évolution.
            <br />
            <br />
            Si vous êtes à la recherche d'un stagiaire dynamique et curieux, je
            serais ravi de vous rencontrer pour discuter des opportunités que
            vous pouvez me proposer.
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
