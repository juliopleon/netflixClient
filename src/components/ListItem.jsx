import "./listitem.scss"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    // useEffect(() => {
    //     async function getMovie() {
    //         try {
    //             const res = await axios.get(`/movies/find/${item}`, {
    //                 headers: {
    //                     token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTlhNWJiNmRkYjRlODg1NTMzZGRhNSIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjg1MjA3NTgwLCJleHAiOjE2ODU2Mzk1ODB9.QjTHc8Ka0Ult1if5c_4GSQkxDolT4kFxrD5pWLelIVs"
    //                 },
    //             });
    //             setMovie(res.data);
    //         } catch (err) {
    //             console.log(err);
    //         }
    //     }
    //     if (item) {
    //         getMovie();
    //     }
    // }, [item]);

    useEffect(() => {
        async function getMovies() {
            try {
                const itemIds = item.split(",").map(id => id.trim());
                const movieRequests = itemIds.map(id =>
                    axios.get(`/movies/find/${id}`, {
                        headers: {
                            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTlhNWJiNmRkYjRlODg1NTMzZGRhNSIsImlzQWRtaW4iOiJ0cnVlIiwiaWF0IjoxNjg1MjA3NTgwLCJleHAiOjE2ODU2Mzk1ODB9.QjTHc8Ka0Ult1if5c_4GSQkxDolT4kFxrD5pWLelIVs"
                        },
                    })
                );
                const movieResponses = await Promise.all(movieRequests);
                const moviesData = movieResponses.map(res => res.data);
                setMovie(moviesData);
            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
    }, [item]);


    // const trailer = ""
    return (
        <Link to={{ pathname: "/watch", movie: movie }}>
            <div className="listItem"
                style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >

                <img src={movie.img}
                    alt=""
                />
                {isHovered && (
                    <>
                        <video src={movie.trailer} autoPlay={true} loop />
                        <div className="itemInfo">
                            <div className="icons">
                                <PlayArrowIcon className="icon" />
                                <AddIcon className="icon" />
                                <ThumbUpAltOutlinedIcon className="icon" />
                                <ThumbDownOutlinedIcon className="icon" />
                            </div>
                            <div className="itemInfoTop">
                                <span>{movie.duration}</span>
                                <span className="limit">+{movie.limit}</span>
                                <span>{movie.year}</span>
                            </div>
                            <div className="desc">
                                {movie.description}
                            </div>
                            <div className="genre">{movie.genre}</div>
                        </div>
                    </>
                )}

            </div>
        </Link>
    );
}
