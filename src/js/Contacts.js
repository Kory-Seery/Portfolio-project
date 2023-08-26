import gitlogo from "../gitblk.png"
import gmaillogo from "../gmaillogo.png"
import styled from "styled-components"

const Contacts = () => {
    return (
<div>
    <h1>Contact me:</h1>

    <p>Github</p>
    <img src={gitlogo} alt="git logo" />
    <p>Gmail</p>
    <Gmailimg src={gmaillogo} alt="gmail logo" />
</div>
    )
}

const Gmailimg = styled.img`
width: 100%;
`

export default Contacts