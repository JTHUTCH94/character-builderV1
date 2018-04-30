import React from 'react';
import Race from './Race';
import Class from './Class';
import Weapon from './Weapon';
import Name from './Name';
import { setName, setRace, setClassification, setWeapon, setDisplay, createCharacterAction } from '../actions';

import { connect } from 'react-redux';

function CreateForm(props) {
    return (
        <form className="builder" onSubmit={(e) => { e.preventDefault(); this.props.dispatch(setDisplay(e)); this.props.dispatch(createCharacterAction(e)) }}>
            <h2 className="title">Build your character</h2>
            <Name onInput={e => this.props.dispatch(setName(e.target.value))} />
            <Race onChange={e => this.props.dispatch(setRace(e.target.value))} />
            <Class onChange={e => this.props.dispatch(setClassification(e.target.value))} />
            <Weapon onChange={e => this.props.dispatch(setWeapon(e.target.value))} />
            <input type="submit" value="Submit" className="save-button" />
        </form>
    )
}

const mapStateToProps = (store) =>({
    name: store.name,
    race: store.race,
    classification: store.classification,
    weapon: store.weapon
});

export default connect(mapStateToProps)(CreateForm);