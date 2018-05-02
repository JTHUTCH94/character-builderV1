import React from 'react';
import { deleteCharacterAction, setUpdate } from '../../actions';
import { connect } from 'react-redux';
import './CharacterList.css';

function CharacterList(props) {
    const characters = props.characters.map((character, index) => (

        <li key={index} className="characters">
            <p>{character.name}</p>
            <p>{character.race}</p>
            <p>{character.classification}</p>
            <p>{character.weapon}</p>
            <button className="delete" onClick={(e) => { console.log('it worked'); props.dispatch(deleteCharacterAction(character.id)) }} >Delete</button>
            <button className="update" onClick={(e) => props.dispatch(setUpdate(character))} >Update</button>
        </li>))

    return (
        <div className="character-list">
            <h1 className="characters-title">Existing Characters</h1>
            <ul className="character-display">{characters}</ul>
        </div>
    )
}

export default connect()(CharacterList);