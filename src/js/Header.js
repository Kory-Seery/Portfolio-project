import { Link } from "react-router-dom"

const Header = () => {
    return (
<div>
<div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contacts">Contacts</Link>
</div>
</div>
    )
}

export default Header