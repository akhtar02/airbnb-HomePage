import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import LanaguageIcon from "@material-ui/icons/Language"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { Avatar } from "@material-ui/core";
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header_icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
            </Link>
            <div className="header_center">
                <input type="text" />
                <SearchIcon />
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanaguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
    )
}

export default Header;
