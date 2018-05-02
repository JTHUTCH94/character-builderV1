import React from 'react';
import './TopNav.css';
import { connect } from 'react-redux';
import { createForm, getCharactersAction } from'../../actions';

export function TopNav(props) {
    return (
        <ul className="nav-bar" role="navigation">
            <li><a href="#create" onClick={e => props.dispatch(createForm(e))}>Create new Character</a></li>
            <li className="show-list"><a href="#show" onClick={e => props.dispatch(getCharactersAction(e))}>Show Characters</a></li>
        </ul>
    )
}

export default connect()(TopNav);