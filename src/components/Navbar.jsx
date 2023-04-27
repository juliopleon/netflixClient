import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import "./navbar.scss"

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png?20190206123158"
                        alt=""
                    />
                    <span>Homepage</span>
                    <span>Tv Shows</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <SearchIcon />
                    <span>KIDS</span>
                    <NotificationsIcon />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQpS0JQ0TW5ZgJ1ki2FqBcVmJa89Mcj4pWcw&usqp=CAU"
                        alt=""
                    />
                    <ArrowDropDownIcon />
                </div>
            </div>
        </div>
    )
}
