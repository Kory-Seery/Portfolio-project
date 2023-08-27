import styled from "styled-components"
import {TypeAnimation} from "react-type-animation"
import Nyanproject from "../vid.mp4"
import Fruitproject from "../Fruit.mp4"
import Frogproject from "../Frog.mp4"
import HIMYMproject from "../HIMYM.mp4"

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
        <p>Nyan cat project</p>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Nyanproject} type="video/mp4" /></Video>
    </Nyan>
    <Fruits>
        <p>Fruit project</p>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Fruitproject} type="video/mp4" /></Video>
    </Fruits>
    <Frogger>
        <p>Great Frog Race project</p>
        <Video width="100%"  height="300px" controls="controls">
        <source src={Frogproject} type="video/mp4" /></Video>
    </Frogger>
    <HIMYM>
    <p>How I Met Your Mother project </p>
        <Video width="100%"  height="300px" controls="controls">
        <source src={HIMYMproject} type="video/mp4" /></Video>
    </HIMYM>
</AllProjects>
</Holding>
    )
}

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
`
const Nyan = styled.div`

`
const Fruits = styled.div`

`
const Frogger = styled.div`

`
const HIMYM = styled.div`

`
const AllProjects = styled.div`
display: grid;
grid-template-columns: auto auto;
`

export default Projects