import React from 'react';

export default function TopNav(){
    return (
        <ul className="nav-bar" >
        <li><a href="create.asp">Create new Character</a></li>
        <li className="character-list"><a href="show.asp">Show Characters</a></li>
      </ul>
    )
}