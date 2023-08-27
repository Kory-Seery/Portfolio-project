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
                "Hockey player 🏒",
                1000,
                "Entrepreneur 💼",
                1000,
                "Gamer 🎮",
                1000,
                "CSS Enthusiast 🤯",
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

            <About />
            <Projects />
            <Contacts /> 

    </Page>
    )
}

const Name = styled.h1`
font-family: 'Charm', cursive;
font-size: 300%;
text-shadow: 2px 1px  purple;
`

const Paragraph = styled.p`
margin-bottom: 30px;
`

const Page = styled.div`
text-align: center;
width: 100%;
`

const Umbrella = styled.img`
max-width: 500px;
max-height: 500px;
width: 50%;
border-radius: 600px;
margin-top: 100px;
box-shadow: 0px 0px 40px purple;
`

const Homepage = styled.div`
padding-bottom: 60px;
background-color: rgb(206, 206, 206);
width: 100%;
`

export default Home