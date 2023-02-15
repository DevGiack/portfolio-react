import LogoTitle from "../../../assets/images/logo-j.png"
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoTitle} />
    </div>
  )
}

export default Logo