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
<Test>
<AllProjects>
    <Nyan>
        <P>Nyan cat Project</P>
        <Explain> This project was designed as a way to practice and learn about Object Oriented Programming. 
            A good bit of code had already been provided for me, and it made for an almost working game.
            The project is divided in two parts. The first part was to fix and implement some basic functionality. 
            In the second part I was able to customize the game as I wish! </Explain>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Nyanproject} type="video/mp4" /></Video>
    </Nyan>
    <Fruits>
        <P>Fruit Project</P>
        <Explain> In this project I needed to build an online fruit store, with different items being sold by different sellers, in different locations. </Explain>
        <Video className="Fruitclass" width="100%"  height="300px" controls="controls">
        <source src={Fruitproject} type="video/mp4" /></Video>
    </Fruits>
    <Frogger>
        <P>Great Frog Race Project</P>
        <Explain> In this project I created a stable of frogs that you can race, and everytime you load the page, frogs from the stable will race a predetermined distance. 
            With this project I used a new method using "Math.Floor" to achieve a Passing grade and learn something new.  </Explain>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Frogproject} type="video/mp4" /></Video>
    </Frogger>
    <HIMYM>
        <P>How I Met Your Mother Project </P>
        <Explain> this project I built was to teach us how to create web pages using Javascript alone! 
            No HTML was used during this project meaning all links and styling was made in Javascript teaching us to not only rely on what was the easiest.</Explain>
        <Video width="100%"  height="300px" controls="controls">
        <source src={HIMYMproject} type="video/mp4" /></Video>
    </HIMYM>
    <HTML>
        <P> First HTML Project</P>
        <Explain> In this project I was shown how to do basic HTML by trying to copy as close as possible from the Teacher. 
            This was my first time using HTML. </Explain>   
        <Video width="100%"  height="300px" controls="controls">
        <source src={HTMLproject} type="video/mp4" /></Video>
    </HTML>
    <JS>
        <P>First CSS Project</P>
        <Explain> In this project I was guided on how to use the HTML I had leant and style it into different ways.
            This project I needed to do styling by trying to copy as close as possible from the Teacher.  </Explain>
        <Video width="100%"  height="300px" controls="controls">
        <source src={JSproject} type="video/mp4" /></Video> 
    </JS>
    <SignUp>
        <P>Sign-Up Project</P>
        <Explain> This project challenged me to create a dynamic form. 
            This project was honestly one of my favorites I have created for HTML and CSS.   </Explain>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Signupproject} type="video/mp4" /></Video> 
    </SignUp>
</AllProjects>
</Test>
</Holding>
    )
}


const Explain = styled.p`
padding-left: 5px;
padding-right: 5px;
@media (max-width:300px){
    font-size: 10px;
} 
`
const P = styled.h3`
border: double;
border-radius: 10000px;
border-color: purple;
background-color: rgb(206, 206, 206);
@media (max-width:600px){
    border-radius: 2px;
} 
`
const Video = styled.video`
max-width:500px;
&.Fruitclass{
    margin-top: 40px;
}
@media (max-width:600px){
    max-height: 20%;
} 
`
const Projectpage = styled.div`
border-style: double;
border-radius: 10000px;
border-color: purple;
background-color: rgb(206, 206, 206);
z-index: 100;
position: relative;
`
const Holding = styled.div`
text-align: center;
padding-top: 70px;
margin-bottom: 50px;
`
const Nyan = styled.div`
border: double;
margin-top: 50px;
text-align: center;
width: 90%;
box-shadow: 0px 0px 20px purple;
`
const Fruits = styled.div`
border: double;
margin-top: 50px;
text-align: center;
width: 90%;
box-shadow: 0px 0px 20px purple;
`
const Frogger = styled.div`
border: double;
margin-top: 50px;
text-align: center;
width: 90%;
box-shadow: 0px 0px 20px purple;
`
const HIMYM = styled.div`
border: double;
margin-top: 50px;
text-align: center;
width: 90%;
box-shadow: 0px 0px 20px purple;
`
const HTML = styled.div`
border: double;
margin-top: 50px;
text-align: center;
width: 90%;
box-shadow: 0px 0px 20px purple;
`
const JS = styled.div`
border: double;
margin-top: 50px;
text-align: center;
width: 90%;
box-shadow: 0px 0px 20px purple;
`
const SignUp =styled.div`
border: double;
margin-top: 50px;
text-align: center;
width: 90%;
box-shadow: 0px 0px 20px purple;
`
const AllProjects = styled.div`
display: grid;
grid-template-columns: auto auto;
z-index: 100;
position: relative;
`
const Test = styled.div`
text-align: center;
margin-left: 5%;
`
export default Projects