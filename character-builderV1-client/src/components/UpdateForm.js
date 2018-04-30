import React from 'react';
import { connect } from 'react-redux';
import Name from './Name';
import Race from './Race';
import Class from './Class';
import Weapon from './Weapon'; 
import { setName, setRace, setClassification, setWeapon, updateCharacterAction } from '../actions';

class UpdateForm extends React.Component{

    /*componentDidMount(){
        console.log(this.props);
        this.props.dispatch(setName(this.props.name));
        this.props.dispatch(setRace(this.props.race));
        this.props.dispatch(setClassification(this.props.classification));
        this.props.dispatch(setWeapon(this.props.weapon));
    };*/

    render(){
        console.log(this.props);
        console.log(this.props.name);
        return (
        <form className="update-form" onSubmit={e => { e.preventDefault(); this.props.dispatch(updateCharacterAction(this.props.id, e))}}>
            <Name name={this.props.name} onInput={e => {e.preventDefault(); this.props.dispatch(setName(e.target.value))}}/>
            <Race race={this.props.race} onChange={e => {e.preventDefault(); this.props.dispatch(setRace(e.target.value))}}/>
            <Class classification={this.props.classification} onChange={e => {e.preventDefault(); this.props.dispatch(setClassification(e.target.value))}}/>
            <Weapon weapon={this.props.weapon} onChange={e => {e.preventDefault(); this.props.dispatch(setWeapon(e.target.value))}}/>
            <input type="submit" value="Submit" className="save-button" />
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