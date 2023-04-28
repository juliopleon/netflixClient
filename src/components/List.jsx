import ListItem from "../components/ListItem";
import "./list.scss";
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';

export default function List() {
    return (
        <div className="list">
            <span className="listTitle">Continue watching</span>
            <div className="wrapper">
                <ArrowBackIosOutlinedIcon className="sliderArrow left" />
                <div className="container">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <ArrowForwardIosOutlinedIcon className="sliderArrow right" />
            </div>
        </div>
    )
}
