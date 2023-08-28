import gitlogo from "../gitblk.png"
import gmaillogo from "../gmaillogo.png"
import styled from "styled-components"
import {TypeAnimation} from "react-type-animation"

const Contacts = () => {
    return (
<All>
    <Para>
    <TypeAnimation
            sequence={[
                "Contact me",
                5000,
                "",
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{fontSize: '2em', display: 'inline-block'}}
            repeat={Infinity}
            />
    </Para>
    <h1>Github
    <Gmailimg src={gitlogo} alt="git logo" />
    </h1>

<Wrap>
        <h1>Gmail
        <Gmailimg src={gmaillogo} alt="gmail logo" />
        </h1>
<Form>
    <label>Full name:</label>
    <Information>
    <input type = "text" id = "name" required/>
    </Information>
    <label>Email address:</label>
    <Information>
    <input type = "email" id = "email" required/>
    </Information>
    <label>Phone number:</label>
    <Information>
    <input type = "#" id = "phone" required/>
    </Information>
    <Footer>
        <Clear type = "reset">Clear</Clear>
        <Submit >Submit</Submit>
    </Footer>
</Form>
</Wrap>
<p>Contact me by:</p>
<div>
    <TypeAnimation
            sequence={[
                "Gmail: kory.seery23@gmail",
                5000,
                "Phone: 438-334-9505",
                5000
            ]}
            wrapper="span"
            speed={50}
            style={{fontSize: '2em', display: 'inline-block'}}
            repeat={Infinity}
            />
</div>

</All>
    )
}

const Gmailimg = styled.img`
width: 100px;
`
const All = styled.div`
padding-top: 40px;
text-align: center;
width: 100%;
height: 80vh;
`
const Form =styled.div`

`
const Wrap = styled.div`

`
const Footer = styled.footer`
margin-top: 15px;
margin-bottom: 30px;
`
const Clear = styled.button`
margin-right: 50px;
border: double;
border-radius: 20px;
border-color: purple;
background-color: rgb(206, 206, 206);
font-size: 20px;
`
const Submit = styled.button`
border: double;
border-radius: 20px;
border-color: purple;
background-color: rgb(206, 206, 206);
font-size: 20px;
`
const Information = styled.div`
    padding-bottom: 10px;
`
const Para = styled.p`
border-style: double;
border-radius: 10000px;
border-color: purple;
background-color: rgb(206, 206, 206);
`
export default Contacts