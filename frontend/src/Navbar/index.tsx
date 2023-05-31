import CCLogo from "./CCLogo"
import GithubLogo from "./GithubLogo"
import './Navbar.css'

const Navbar = () => {
  return (
  <section className="navbar">
    <div className="navbar_start_content">
      <CCLogo className="navbar_logo"/>
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