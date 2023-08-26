import Projects from "./Projects"
import About from "./About"
import Contacts from "./Contacts"
import styled from "styled-components"
import meumbrella from "../pic of me w umbrella.jpg"
import {TypeAnimation} from "react-type-animation"

const Home = () => {
    return (
    <Page>
        <Homepage>
        <Umbrella src={meumbrella} alt="picofme1"/>
        <Name>Kory Seery</Name>
        <div>
        <Paragraph>
            I am a{` `}
        </Paragraph>
        <Paragraph>
            <TypeAnimation
            sequence={[
                "Web Developer 💻",
                1000,
                "Gamer 🎮",
                1000,
                "Brother 😎",
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{fontSize: '2em', display: 'inline-block'}}
            repeat={Infinity}
            />
            </Paragraph>
            <Paragraph>
            from Montreal, Canada 🍁
            </Paragraph>
        </div>    
        </Homepage>    
        <Catagory>
            <About />
            <Projects />
            <Contacts /> 
        </Catagory>
    </Page>
    )
}

const Name = styled.h1`

`

const Paragraph = styled.p`
margin-bottom: 30px;
`

const Catagory = styled.div`

`
const Page = styled.div`
text-align: center;
`

const Umbrella = styled.img`
width: 600px;
height: 600px;
border-radius: 600px;
margin-top: 70px;
`

const Homepage = styled.div`
padding-bottom: 20px;
background-color: rgb(206, 206, 206);
`

export default Home