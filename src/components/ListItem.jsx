import "./listitem.scss"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { useEffect, useState } from "react";
import axios from "axios";

export default function ListItem({ index, item }) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item)
            } catch (err) {
                console.log(err)
            }
        }
    })
    // const trailer = ""
    return (
        <div className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <img src={item.img}
                alt=""
            />
            {isHovered && (
                <>
                    <video src={item.trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrowIcon className="icon" />
                            <AddIcon className="icon" />
                            <ThumbUpAltOutlinedIcon className="icon" />
                            <ThumbDownOutlinedIcon className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>{item.duration}</span>
                            <span className="limit">+{item.limit}</span>
                            <span>{item.year}</span>
                        </div>
                        <div className="desc">
                            {item.description}
                        </div>
                        <div className="genre">{item.genre}</div>
                    </div>
                </>
            )}

        </div>
    );
}
