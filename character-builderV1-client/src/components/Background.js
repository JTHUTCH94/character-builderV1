import React from 'react';
import '../css/Background.css';
import { setBackgroundAction, setAppearanceAction } from '../actions';

export default function Background(props) {
            return (
            <div className="bio">
            <h4 className="background-title">Background</h4>
                <div className="background">
                    <label className="background-title">Background</label>
                    <input type="text" className="text-field" onInput={e => props.setBackgroundAction(e)}/>
                    <label className="background-title">Appearance</label>
                    <input type="text" className="text-field" onInput={e => props.setAppearanceAction(e)}/>
                </div>
            </div>)
    }