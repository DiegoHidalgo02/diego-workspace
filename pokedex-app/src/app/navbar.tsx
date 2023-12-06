import "./app.module.css";

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <img className="nav-img" src="./img/logo.png" alt="logo"/>
            <ul className="nav-list">
                <li>Home</li>
                <li>Card</li>
                <li>About</li>
            </ul>
            <button className="nav-button">Subscribe</button>
        </nav>
    </div>
  )
}
