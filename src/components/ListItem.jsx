import "./listitem.scss"
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import { useState } from "react";

export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = ""
    return (
        <div className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <img src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW92aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
            />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrowIcon className="icon" />
                            <AddIcon className="icon" />
                            <ThumbUpAltOutlinedIcon className="icon" />
                            <ThumbDownOutlinedIcon className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 min</span>
                            <span className="limit">+14</span>
                            <span>2001</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates rem inventore possimus, illum facilis quae ullam quibusdam nihil.
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}

        </div>
    );
}
