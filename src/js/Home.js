import Projects from "./Projects"
import About from "./About"
import Contacts from "./Contacts"

const Home = () => {
    return (
    <div>
        <h1>Kory Seery</h1>
        <p>Web Developer from Montreal, Canada 🍁</p>        
        <div>
            <About />
            <Projects />
            <Contacts /> 
        </div>
    </div>
    )
}

export default Home