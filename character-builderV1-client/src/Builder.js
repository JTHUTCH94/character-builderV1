import React from 'react';
import { connect } from 'react-redux';

import Race from './components/Race';
import Class from './components/Class';
import Weapon from './components/Weapon';
import CharacterCard from './components/CharacterCard';
import CharacterList from './components/CharacterList';
import UpdateForm from './components/UpdateForm';
import UpdatedCharacterCard from './components/UpdatedCharacter';
import Name from './components/Name';
import './css/Builder.css';
import TopNav from './components/TopNav';
/*import Torch1 from './components/Torch1';
import Torch2 from './components/Torch2';
import './css/Torch.css';
import Decoration1 from './components/Decoration1';
import Decoration2 from './components/Decoration2';*/
import { createCharacterAction, getCharactersAction, setName, setRace, setClassification, setWeapon, setDisplay } from './actions';


class Builder extends React.Component {

    render() {

        if (this.props.display === 'form') {
            return (
                <div className="character-form">
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <form className="builder" onSubmit={(e) => { e.preventDefault(); this.props.dispatch(setDisplay()); this.props.dispatch(createCharacterAction(e)) }}>
                        <h2 className="title">Build your character</h2>
                        <Name onInput={e => this.props.dispatch(setName(e.target.value))} />
                        <Race onChange={e => this.props.dispatch(setRace(e.target.value))} />
                        <Class onChange={e => this.props.dispatch(setClassification(e.target.value))} />
                        <Weapon onChange={e => this.props.dispatch(setWeapon(e.target.value))} />
                        <input type="submit" value="Submit" className="save-button" />

                    </form>
                </div>
            )
        } else if (this.props.display === 'new-character') {
            return (
                <div className="new-character">
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <CharacterCard />
                </div>
            );
        } else if (this.props.display === "characters") {
            return (
                <div className="character-list">
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <CharacterList characters={this.props.characters} />
                </div>
            )
        } else if (this.props.display === 'update') {
            return (
                <div className="update-form">
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <UpdateForm />
                </div>
            )
        } else if (this.props.display === 'updated-character') {
            return (
                <div className="updated-character">
                    <TopNav onClick={e => { e.preventDefault(); this.props.dispatch(getCharactersAction(e)) }} />
                    <UpdatedCharacterCard />
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

/**/
/*<div className="race">
                            <h3 className="title">Choose your Race</h3>
                            <div className="builder-choices">
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Human" name="race" onChange={e => this.props.dispatch(setRace(e.target.value))} />
                                    Human </label>
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Elf" name="race" onChange={e => this.props.dispatch(setRace(e.target.value))} />
                                    Elf</label>
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Orc" name="race" onChange={e => this.props.dispatch(setRace(e.target.value))} />
                                    Orc</label>
                                <div className="current-race">{this.props.race}</div>
                            </div>
                        </div> 
                        <div className="class">
                            <h3 className="title">Choose your Classification</h3>
                            <div className="builder-choices">
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Cleric" name="classification" onChange={e => this.props.dispatch(setClassification(e.target.value))} />
                                    Cleric</label>
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Barbarian" name="classification" onChange={e => this.props.dispatch(setClassification(e.target.value))} /> Brute</label>
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Wizard" name="classification" onChange={e => this.props.dispatch(setClassification(e.target.value))} />
                                    Wizard</label>
                                <div className="current-classification">{this.props.classification}</div>
                            </div>
                        </div>
                        <div className="weapon">
                            <h3 className="title">Choose your Weapon</h3>
                            <div className="builder-choices">
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Mace" name="weapon" onChange={e => this.props.dispatch(setWeapon(e.target.value))} />
                                    Mace</label>
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Axe" name="weapon" onChange={e => this.props.dispatch(setWeapon(e.target.value))} />
                                    Axe</label>
                                <label className="choice-label">
                                    <input className="choice" type="radio" value="Staff" name="weapon" onChange={e => this.props.dispatch(setWeapon(e.target.value))} />
                                    Staff</label>
                                <div className="current-weapon">{this.props.weapon}</div>
                            </div>
                        </div>
                        
                        
            )*/