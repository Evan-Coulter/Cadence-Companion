import CCLogo from "../assets/cc_logo.svg"
import GithubLogo from "../assets/github_logo.svg"
import GithubLogoPink from "../assets/github_logo_pink.svg"
import './Navbar.css'

const Navbar = () => {
  return (
  <section className="navbar">
    <div className="navbar_start_content">
      <img 
        className="navbar_logo"
        src={CCLogo}/>
      <div>
        <h1 className="navbar_title">CadenceCompanion</h1>
      </div>
    </div>
    <div>
      <a href="https://github.com/Evan-Coulter/Cadence-Companion">
        <img 
          className="github_logo" 
          src={GithubLogo}
          onMouseOver={e=>(e.currentTarget.src = GithubLogoPink)}
          onMouseOut={e=>(e.currentTarget.src = GithubLogo)} />
      </a>
    </div>
  </section>)
}

export default Navbar