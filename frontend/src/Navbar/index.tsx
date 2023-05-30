import Logo from "./CCLogo"
import GithubLogo from "./GithubLogo"
import './Navbar.css'

type Props = {}

const Navbar = (props: Props) => {
  return (
  <section className="navbar">
    <div className="navbar_start_content">
      <Logo className="navbar_logo"/>
      <div>
        <h1 className="navbar_title">CadenceCompanion</h1>
      </div>
    </div>
    <div>
      <a href="https://github.com/Evan-Coulter/Cadence-Companion">
        <GithubLogo />
      </a>
    </div>
  </section>)
}

export default Navbar