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
    <Infotocontact>
<Wrap>
        <Meby>Gmail</Meby>
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
<Meby>Contact me by:</Meby>
<Infobottom>
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
</Infobottom>
</Infotocontact>
</All>
    )
}

const Infobottom = styled.div`
@media (max-width: 600px) {
    font-size: 10px;
}
`
const Infotocontact = styled.div`

`
const Meby = styled.h1`
font-family: 'Charm', cursive;
font-size: 300%;
text-shadow: 2px 1px  purple;
`
const All = styled.div`
padding-top: 70px;
text-align: center;
width: 100%;
height: 94vh;
background-color: rgb(206, 206, 206);
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