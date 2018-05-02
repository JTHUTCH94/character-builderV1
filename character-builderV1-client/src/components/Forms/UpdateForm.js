import React from 'react';
import { connect } from 'react-redux';
import Name from '../Inputs/Name';
import Race from '../Inputs/Race';
import Class from '../Inputs/Class';
import Weapon from '../Inputs/Weapon';
import { setName, setRace, setClassification, setWeapon, updateCharacterAction } from '../../actions';
import './UpdateForm.css';

class UpdateForm extends React.Component {

    render() {
        return (
            <form className="update-choices" onSubmit={e => { e.preventDefault(); this.props.dispatch(updateCharacterAction(this.props.id, e)) }}>
                <Name className="name-input" name={this.props.name} onInput={e => { e.preventDefault(); this.props.dispatch(setName(e.target.value)) }} />
                <Race race={this.props.race} onChange={e => { e.preventDefault(); this.props.dispatch(setRace(e.target.value)) }} />
                <Class classification={this.props.classification} onChange={e => { e.preventDefault(); this.props.dispatch(setClassification(e.target.value)) }} />
                <Weapon weapon={this.props.weapon} onChange={e => { e.preventDefault(); this.props.dispatch(setWeapon(e.target.value)) }} />
                <input type="submit" value="Submit" className="update-button" />
            </form>
        )
    };
};

const mapStateToProps = (state) => ({
    name: state.name,
    race: state.race,
    classification: state.classification,
    weapon: state.weapon,
    id: state.id
});

export default connect(mapStateToProps)(UpdateForm);