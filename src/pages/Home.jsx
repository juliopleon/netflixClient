import Featured from "../components/Featured"
import { Navbar } from "../components/Navbar"
import "./shome.scss"
import List from "../components/List"


export const Home = ({ type }) => {
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

// export default Home;
