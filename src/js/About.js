import htmlpic from "../htmlimg1.png"
import Jspic from "../jsimg1.png"
import reactpic from "../reactimg1.png"
import csspic from "../cssimg1.png"
import styled from "styled-components"
import about from "../about me.png"

const About = () => {
    return (
        <Everythingabout>
            <Photodiv>
            <Photo src={about} alt="Abouttittle" />
            </Photodiv>
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
</Info>
</Everythingabout>
    )
}

const Descriptionofme = styled.p`
font-style: italic;
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
const Photo = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 50%;
`
const Photodiv = styled.div`
background-color: rgb(57, 62, 70);
`
const Everythingabout = styled.div`
text-align: center;
`
const Info = styled.div`
margin-left: 30px;
margin-right: 30px;
`
export default About