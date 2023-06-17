import Featured from "../components/Featured";
import { Navbar } from "../components/Navbar";
import "./shome.scss";
import List from "../components/List";
import { useEffect, useState } from "react";
import axios from "axios";


export const Home = ({ type }) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);
    // useEffect(() => {
    //     const getRandomLists = async () => {
    //         try {
    //             const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
    // headers: {
    //     token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTlhNWJiNmRkYjRlODg1NTMzZGRhNSIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjg1MjA3NTgwLCJleHAiOjE2ODU2Mzk1ODB9.QjTHc8Ka0Ult1if5c_4GSQkxDolT4kFxrD5pWLelIVs"
    // },
    //             });
    //             // console.log(res)
    //             setLists(res.data);
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };
    //     getRandomLists();
    // }, [type, genre]);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTlhNWJiNmRkYjRlODg1NTMzZGRhNSIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjg2MDE3MDYzLCJleHAiOjE2ODY0NDkwNjN9.q2bDOAQe_LwXVa-psFXNGRW-DJVheQsggLJuFnKa1kE";
                const url = `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`;

                const response = await axios.get(url, {
                    headers: { token }
                });

                setLists(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getRandomLists();
    }, [type, genre]);

    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list, i) => (
                <List key={i} list={list} />
            ))}
        </div>
    );
}

// export default Home;
