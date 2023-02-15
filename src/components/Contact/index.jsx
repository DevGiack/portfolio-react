import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'default_service',
        'template_85lpn0k',
        form.current,
        'Wf91JVL-8hqdRQHaO'
      )
      .then(
        () => {
          alert('Votre message a été envoyé, je vous contact rapidement !')
          window.location.reload(false)
        },
        () => {
          alert("Erreur lors de l'envoie du message, veuillez réessayer !")
        }
      )
  }

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
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Nom" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Sujet"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message"required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Jaccomo De Grégorio,
          <br />
          74970 Marignier,
          <br />
          Auvergne-Rhône-Alpes,
          <br />
          France
          <br />
          <span>devgiack@protonmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[46.090381, 6.49929]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[46.090381, 6.49929]}>
                <Popup>Rencontrons nous autour d'un café.</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
