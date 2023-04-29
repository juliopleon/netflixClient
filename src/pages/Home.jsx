import Featured from "../components/Featured"
import { Navbar } from "../components/Navbar"
import "./shome.scss"
import List from "../components/List"


export const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

// export default Home;
