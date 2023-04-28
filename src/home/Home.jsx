import Featured from "../components/Featured"
import { Navbar } from "../components/Navbar"
import "./shome.scss"


export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
        </div>
    )
}

// export default Home;
