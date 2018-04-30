import React from 'react';
import TopNav from '../Inputs/TopNav';
import { deleteCharacterAction, setUpdate, getCharactersAction } from '../../actions';
import { connect } from 'react-redux';

function CharacterList(props) {
    const characters = props.characters.map((character, index) => (

        <li key={index} className="characters">
            <p>{character.name}</p>
            <p>{character.race}</p>
            <p>{character.classification}</p>
            <p>{character.weapon}</p>
            <button onClick={(e) => { console.log('it worked'); props.dispatch(deleteCharacterAction(character.id)) }} >Delete</button>
            <button onClick={(e) => props.dispatch(setUpdate(character))} >Update</button>
        </li>))

    return (
        <div className="character-list">
            <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
            <h3 className="characters-title">Existing Characters</h3>
            <ul className="character-display">{characters}</ul>
        </div>
    )
}

export default connect()(CharacterList);