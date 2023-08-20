import gitlogo from "../gitblk.png"
import gmaillogo from "../gmaillogo.png"

const Contacts = () => {
    return (
<div>
    <h1>Contact me:</h1>

    <p>Github</p>
    <img src={gitlogo} alt="git logo" />
    <p>Gmail</p>
    <img src={gmaillogo} alt="gmail logo" />
</div>
    )
}

export default Contacts