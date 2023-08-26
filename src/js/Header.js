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
position: fixed;
width: 100%;
`

const Linkstoplaces = styled.div`
display: flex;
background-color: black;
`

const Homelink = styled(Link)`
color: white;
text-decoration: none;
padding: 1%;
margin: auto;
text-align: center;
&:hover {
    background-color: purple;
}
`

const Aboutpage = styled(Link)`
color: white;
text-decoration: none;
padding: 1%;
margin: auto;
text-align: center;
&:hover {
    background-color: purple;
}
`

const Projectpage = styled(Link)`
color: white;
text-decoration: none;
padding: 1%;
margin: auto;
text-align: center;
&:hover {
    background-color: purple;
}
`

const Contactspage = styled(Link)`
color: white;
text-decoration: none;
padding: 1%;
margin: auto;
text-align: center;
&:hover {
    background-color: purple;
}
`

export default Header