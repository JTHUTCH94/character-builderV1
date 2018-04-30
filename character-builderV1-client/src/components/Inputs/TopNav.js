import React from 'react';
import './TopNav.css';
export default function TopNav(props) {
    return (
        <ul className="nav-bar" role="navigation">
            <li><a href="create.asp">Create new Character</a></li>
            <li className="show-list"><a href="show.asp" onClick={e => props.onClick(e)}>Show Characters</a></li>
        </ul>
    )
}