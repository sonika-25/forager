import "./styles/NavBar.css"

function Navbar() {
    return (
      <nav className="navigation">
        <a href="/">
            <div className="Foragerlogo navigation-menu">
                <a href="/" className="Foragerlogo"></a>
            </div>
        </a>
      <div
        className="navigation-menu">
        <ul>
          
          <li>
            <a href="/" color= "#0C0092">Find Food</a>
          </li>
          <li>
            <a href="/">Rehome your food</a>
          </li>
          <li>
            <a href="/">Our Mission</a>
          </li>
          <li>
            <a href="/">Login/Register</a>
          </li>
        </ul>
      </div>
    </nav>
      )
  }
export default Navbar