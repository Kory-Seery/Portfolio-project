import htmlpic from "../htmlimg1.png"
import Jspic from "../jsimg1.png"
import reactpic from "../reactimg1.png"
import csspic from "../cssimg1.png"
import styled from "styled-components"
import {TypeAnimation} from "react-type-animation"

const About = () => {
    return (
<Everythingabout>
            <Aboutpage>
            <TypeAnimation
            sequence={[
                "About me",
                5000,
                "",
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{fontSize: '2em', display: 'inline-block'}}
            repeat={Infinity}
            />
            </Aboutpage>
<Info>   
    <Descriptionofme>I am a 19yr old with major goals. One of my major goals is to one day have
        my own company, hence why i entered at University of Concordia in the Web Development program.</Descriptionofme>

    <Learnprogram>This program helped me learn:</Learnprogram>
        <Logophoto>
            <Pics src={htmlpic} alt="html logo"/>
            <Pics src={Jspic} alt="js logo"/>
            <Pics src={csspic} alt="css logo"/>
            <Pics src={reactpic} alt="react logo"/>
        </Logophoto>
    <Descriptionofme>A little more about me I have 2 adorable pets a tuxedo cat and a blue merle australian shepard dog, when im not relaxing with them i love to play video games,
        listen to some music, make art or play hockey.</Descriptionofme>
        <Me>
    <Languages>
        <Lang>Languages</Lang>
        <Descriptionofme>English</Descriptionofme>
        <Descriptionofme>French</Descriptionofme>
    </Languages>
    <Ethnicity>
        <Lang>Ethnicity</Lang>
        <Descriptionofme>Canadian 🟥🍁🟥</Descriptionofme>
        <Descriptionofme>Quebecois 🟦⚜️🟦 </Descriptionofme>
        <Descriptionofme>Part Italian 🟩⬜🟥</Descriptionofme>
        <Descriptionofme>Part Irish 🟩⬜🟧</Descriptionofme>
    </Ethnicity>
    </Me>
</Info>
</Everythingabout>
    )
}

const Descriptionofme = styled.p`
font-style: italic;
@media (max-width:600px) {
    font-size: 12px;
}
`
const Learnprogram = styled.p`
font-style: italic;
`
const Logophoto = styled.div`

`
const Pics = styled.img`
padding-left: 10%;
margin-left: auto;
margin-right: auto;
`
const Aboutpage = styled.div`
border-style: double;
border-radius: 10000px;
border-color: purple;
background-color: rgb(206, 206, 206);;
`
const Everythingabout = styled.div`
text-align: center;
padding-top: 70px;
`
const Info = styled.div`
margin-left: 30px;
margin-right: 30px;
`
const Lang = styled.h3`

`
const Ethnicity = styled.div`

`
const Languages = styled.div`

`
const Me = styled.div`
display: grid;
grid-template-columns: auto auto;
`
export default About