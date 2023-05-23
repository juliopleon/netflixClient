import Featured from "../components/Featured";
import { Navbar } from "../components/Navbar";
import "./shome.scss";
import List from "../components/List";
import { useEffect, useState } from "react";
import axios from "axios";


export const Home = ({ type }) => {
    const { lists, setLists } = useState([]);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type && "?type=" + type}`)
            } catch (err) {
                console.log(err)
            }
        }
    })
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
