import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import "./featured.scss"

export default function Featured({ type }) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Tv Shows"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-Fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" alt="" />
            <div className="info">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRtvAfcDwKz9jfFygMK6z4uZ-dpJForg9wiw&usqp=CAU"
                    alt=""
                />
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illo ipsum minus eum ab hic dolorum quam! Vero nisi at ut vitae! Eligendi consequatur provident deleniti architecto possimus necessitatibus ipsam!</span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrowIcon />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlinedIcon />
                        <span>Info</span>
                    </button>

                </div>
            </div>
        </div>
    )
}
