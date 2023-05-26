import Featured from "../components/Featured";
import { Navbar } from "../components/Navbar";
import "./shome.scss";
import List from "../components/List";
import { useEffect, useState } from "react";
import axios from "axios";


export const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTlhNWJiNmRkYjRlODg1NTMzZGRhNSIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjg0ODgxMzQzLCJleHAiOjE2ODUzMTMzNDN9.AZeMFhj7k5NxoMJLmPpsmEZhTaiF7PnQbBytgohWuvE"
                    },
                });
                // console.log(res)
                setLists(res.data);
            } catch (err) {
                console.log(err)
            }
        };
        getRandomLists();
    }, [type, genre]);
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list, item) => (
                <List key={item} list={list} />
            ))}
        </div>
    )
}

// export default Home;
