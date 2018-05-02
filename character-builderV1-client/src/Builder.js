import React from 'react';
import { connect } from 'react-redux';

import EnterScreen from './components/Displays/EnterScreen';
import Race from './components/Inputs/Race';
import Class from './components/Inputs/Class';
import Weapon from './components/Inputs/Weapon';
import CharacterCard from './components/Displays/CharacterCard';
import CharacterList from './components/Displays/CharacterList';
import UpdateForm from './components/Forms/UpdateForm';
import UpdatedCharacterCard from './components/Displays/UpdatedCharacter';
import Name from './components/Inputs/Name';
import TopNav from './components/Inputs/TopNav';
import './Builder.css';

import { createCharacterAction, getCharactersAction, setName, setRace, setClassification, setWeapon, setDisplay, enterScreen } from './actions';


class Builder extends React.Component {

    render() {
        if (this.props.display === 'enter-screen') {
            return (
                <div className="enter">
                    <EnterScreen onClick={e => this.props.dispatch(enterScreen())} />
                </div>
            )
        } else if (this.props.display === 'form') {
            return (
                <div className="create-form">
                <TopNav />
                    <div className="character-form">
                        <form className="builder" onSubmit={(e) => { e.preventDefault(); this.props.dispatch(setDisplay()); this.props.dispatch(createCharacterAction(e)) }}>
                            <h1 className="title">Build your character</h1>
                            <Name onInput={e => this.props.dispatch(setName(e.target.value))} />
                            <Race onChange={e => this.props.dispatch(setRace(e.target.value))} />
                            <Class onChange={e => this.props.dispatch(setClassification(e.target.value))} />
                            <Weapon onChange={e => this.props.dispatch(setWeapon(e.target.value))} />
                            <input type="submit" value="Submit" className="save-button" />
                        </form>
                    </div>
                </div>
            )
        } else if (this.props.display === 'new-character') {
            return (
                <div className="new-character">
                    <TopNav />
                    <CharacterCard />
                </div>
            );
        } else if (this.props.display === "characters") {
            return (
                <div className="character-page">
                    <TopNav />
                    <CharacterList characters={this.props.characters} />
                </div>
            )
        } else if (this.props.display === 'update') {
            return (
                <div className="update-form">
                    <TopNav />
                    <UpdateForm />
                </div>
            )
        } else if (this.props.display === 'updated-character') {
            return (
                <div className="updated-character">
                    <TopNav />
                    <UpdatedCharacterCard />
                </div>
            );
        } else{ return null}
    };
};

const mapStateToProps = (state) => ({
    characters: state.characters,
    display: state.display,
    name: state.name,
    race: state.race,
    classification: state.classification,
    weapon: state.weapon
});

export default connect(mapStateToProps)(Builder);