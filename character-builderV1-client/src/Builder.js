import React from 'react';
import { connect } from 'react-redux';

import Race from './components/Inputs/Race';
import Class from './components/Inputs/Class';
import Weapon from './components/Inputs/Weapon';
import CharacterCard from './components/Displays/CharacterCard';
import CharacterList from './components/Displays/CharacterList';
import UpdateForm from './components/Forms/UpdateForm';
import UpdatedCharacterCard from './components/Displays/UpdatedCharacter';
import Name from './components/Inputs/Name';
import TopNav from './components/Inputs/TopNav';
import Torch1 from './components/Decorations/Torch1';
import Torch2 from './components/Decorations/Torch2';
import Decoration1 from './components/Decorations/Decoration1';
import Decoration2 from './components/Decorations/Decoration2';
import './Builder.css';

import { createCharacterAction, getCharactersAction, setName, setRace, setClassification, setWeapon, setDisplay } from './actions';


class Builder extends React.Component {

    render() {

        if (this.props.display === 'form') {
            return (
                <div className="character-form">
                    <Decoration1 />
                    <Torch1 />
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <form className="builder" onSubmit={(e) => { e.preventDefault(); this.props.dispatch(setDisplay()); this.props.dispatch(createCharacterAction(e)) }}>
                        <h2 className="title">Build your character</h2>
                        <Name onInput={e => this.props.dispatch(setName(e.target.value))} />
                        <Race onChange={e => this.props.dispatch(setRace(e.target.value))} />
                        <Class onChange={e => this.props.dispatch(setClassification(e.target.value))} />
                        <Weapon onChange={e => this.props.dispatch(setWeapon(e.target.value))} />
                        <input type="submit" value="Submit" className="save-button" />
                        <Torch2 />
                        <Decoration2 />
                    </form>
                </div>
            )
        } else if (this.props.display === 'new-character') {
            return (
                <div className="new-character">
                    <Decoration1 />
                    <Torch1 />
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <CharacterCard />
                    <Torch2 />
                    <Decoration2 />
                </div>
            );
        } else if (this.props.display === "characters") {
            return (
                <div className="character-page">
                    <Decoration1 />
                    <Torch1 />
                    <CharacterList characters={this.props.characters} />
                    <Torch2 />
                    <Decoration2 />
                </div>
            )
        } else if (this.props.display === 'update') {
            return (
                <div className="update-form">
                    <Decoration1 />
                    <Torch1 />
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <UpdateForm />
                    <Torch2 />
                    <Decoration2 />
                </div>
            )
        } else if (this.props.display === 'updated-character') {
            return (
                <div className="updated-character">
                    <Decoration1 />
                    <Torch1 />
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <UpdatedCharacterCard />
                    <Torch2 />
                    <Decoration2 />
                </div>
            );
        }
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