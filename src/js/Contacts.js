import gitlogo from "../gitblk.png"
import gmaillogo from "../gmaillogo.png"
import styled from "styled-components"

const Contacts = () => {
    return (
<All>
    <h1>Contact me:</h1>

    <p>Github</p>
    <img src={gitlogo} alt="git logo" />
    <p>Gmail</p>
    <Gmailimg src={gmaillogo} alt="gmail logo" />
</All>
    )
}

const Gmailimg = styled.img`
width: 100px;
`
const All = styled.div`
margin-top: -25px;
text-align: center;
`

export default Contacts