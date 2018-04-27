import React from 'react';
import { connect } from 'react-redux';
import Name from './Name';
import Race from './Race';
import Class from './Class';
import Weapon from './Weapon'; 
import { setName, setRace, setClassification, setWeapon } from '../actions';

function UpdateForm(props) {
    return (
        <form className="update-form">
            <Name name={props.name} onInput={e => {e.preventDefault(); this.props.dispatch(setName(e.target.value))}}/>
            <Race race={props.race} onClick={e => {e.preventDefault(); this.props.dispatch(setRace(e.target.value))}}/>
            <Class classification={props.classification} onClick={e => {e.preventDefault(); this.props.dispatch(setClassification(e.target.value))}}/>
            <Weapon weapon={props.weapon} onClick={e => {e.preventDefault(); this.props.dispatch(setWeapon(e.target.value))}}/>
            <input type="submit" value="Submit" className="save-button" />
        </form>
    )
}

const mapStateToProps = (store) => ({
    name: store.name,
    race: store.race,
    classification: store.classification,
    weapon: store.weapon
});

export default connect(mapStateToProps)(UpdateForm);