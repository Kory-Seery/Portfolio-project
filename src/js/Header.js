import { Link } from "react-router-dom"
import styled from "styled-components"



const Header = () => {
    return (
<Everything>
<Linkstoplaces>
    <Homelink to="/">Home</Homelink>
    <Aboutpage to="/about">About</Aboutpage>
    <Projectpage to="/projects">Projects</Projectpage>
    <Contactspage to="/contacts">Contacts</Contactspage>
</Linkstoplaces>
</Everything>
    )
}

const Everything = styled.div`

`

const Linkstoplaces = styled.div`

`

const Homelink = styled(Link)`
display: inline-block;
`

const Aboutpage = styled(Link)`
display: inline-block;
`

const Projectpage = styled(Link)`
display: inline-block;
`

const Contactspage = styled(Link)`
display: inline-block;
`

export default Header