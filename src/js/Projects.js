import styled from "styled-components"
import {TypeAnimation} from "react-type-animation"
import Nyanproject from "../vid.mp4"
import Fruitproject from "../Fruit.mp4"
import Frogproject from "../Frog.mp4"
import HIMYMproject from "../HIMYM.mp4"
import HTMLproject from "../HTML.mp4"
import JSproject from "../First JS.mp4"
import Signupproject from "../SignUp.mp4"

const Projects = () => {
    return (
<Holding>
    <Projectpage>
    <TypeAnimation
            sequence={[
                "Projects",
                5000,
                "",
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{fontSize: '2em', display: 'inline-block'}}
            repeat={Infinity}
            />
    </Projectpage>
<AllProjects>
    <Nyan>
        <P>Nyan cat Project</P>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Nyanproject} type="video/mp4" /></Video>
    </Nyan>
    <Fruits>
        <P>Fruit Project</P>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Fruitproject} type="video/mp4" /></Video>
    </Fruits>
    <Frogger>
        <P>Great Frog Race Project</P>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Frogproject} type="video/mp4" /></Video>
    </Frogger>
    <HIMYM>
    <P>How I Met Your Mother Project </P>
        <Video width="100%"  height="300px" controls="controls">
        <source src={HIMYMproject} type="video/mp4" /></Video>
    </HIMYM>
    <HTML>
    <P> First HTML Project</P>   
        <Video width="100%"  height="300px" controls="controls">
        <source src={HTMLproject} type="video/mp4" /></Video>
    </HTML>
    <JS>
    <P>First CSS Project</P>
        <Video width="100%"  height="300px" controls="controls">
        <source src={JSproject} type="video/mp4" /></Video> 
    </JS>
    <SignUp>
    <P>Sign-Up Project</P>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Signupproject} type="video/mp4" /></Video> 
    </SignUp>
</AllProjects>
</Holding>
    )
}

const P = styled.p`

`
const Video = styled.video`
max-width:500px;
`
const Projectpage = styled.div`
border-style: double;
border-radius: 10000px;
border-color: purple;
background-color: rgb(206, 206, 206);
`

const Holding = styled.div`
text-align: center;
padding-top: 70px;
margin-bottom: 50px;
`
const Nyan = styled.div`
border: double;
margin-top: 50px;
`
const Fruits = styled.div`
border: double;
margin-top: 50px;
`
const Frogger = styled.div`
border: double;
margin-top: 50px;
`
const HIMYM = styled.div`
border: double;
margin-top: 50px;
`
const HTML = styled.div`
border: double;
margin-top: 50px;
`
const JS = styled.div`
border: double;
margin-top: 50px;
`
const SignUp =styled.div`
border: double;
margin-top: 50px;
`
const AllProjects = styled.div`
display: grid;
grid-template-columns: auto auto;
z-index: 1;
`

export default Projects