import React from 'react';
import { connect } from 'react-redux';
import './Builder.css';
import TopNav from './components/TopNav';
import Torch1 from './components/Torch1';
import Torch2 from './components/Torch2';
import './components/Torch.css';
import { createCharacter, getCharacters, setName, setRace, setClass, setWeapon, setDisplay, deleteCharacter } from './actions';


class Builder extends React.Component {

    
    render() {
        if (this.props.display === 'form') {
            return (
                <div className="character-form">
                    <TopNav onClick={e => this.props.dispatch(getCharacters(e))} />
                    <Torch1 />
                    <form className="builder" onSubmit={(e) => {e.preventDefault(); this.props.dispatch(setDisplay(e)); this.props.dispatch(createCharacter(e))}}>
                        <h2 className="title">Build your character</h2>
                        <label className="title">Name</label>
                        <input type="text" className="name" name="name" onInput={e => this.props.dispatch(setName(e))} />
                        <div className="race">
                            <h3 className="title">Choose your Race</h3>
                            <div className="builder-choices">
                                <label>
                                <input className="choice" type="radio" value="Human" name="race" onChange={e => this.props.dispatch(setRace(e))} />
                                Human </label>
                                <label>
                                <input className="choice" type="radio" value="Elf" name="race" onChange={e => this.props.dispatch(setRace(e))} />
                                Elf</label>
                                <label>
                                <input className="choice" type="radio" value="Orc" name="race" onChange={e => this.props.dispatch(setRace(e))} />
                                Orc</label>
                            </div>
                        </div>
                        <div className="class">
                            <h3 className="title">Choose your Class</h3>
                            <div className="builder-choices">
                                <label>
                                <input className="choice" type="radio" value="Cleric" name="class" onChange={e => this.props.dispatch(setClass(e))} />
                                Cleric</label>
                                <label>
                                <input className="choice" type="radio" value="Barbarian" name="class" onChange={e => this.props.dispatch(setClass(e))} />
                                Barbarian</label>
                                <label>
                                <input className="choice" type="radio" value="Wizard" name="class" onChange={e => this.props.dispatch(setClass(e))} />
                                Wizard</label>
                            </div>
                        </div>
                        <div className="weapon">
                            <h3 className="title">Choose your Weapon</h3>
                            <div className="builder-choices">
                                <label>
                                <input className="choice" type="radio" value="Mace" name="weapon" onChange={e => this.props.dispatch(setWeapon(e))} />
                                Mace</label>
                                <label>
                                <input className="choice" type="radio" value="Axe" name="weapon" onChange={e => this.props.dispatch(setWeapon(e))} />
                                Axe</label>
                                <label>
                                <input className="choice" type="radio" value="Staff" name="weapon" onChange={e => this.props.dispatch(setWeapon(e))} />
                                Staff</label>
                            </div>
                        </div>
                        <input type="submit" value="Submit" className="save-button" />
                    </form>
                    <Torch2 />
                </div>
            )
        } else if (this.props.display === 'new-character') {
            return (
                <div className="new-character">
                    <TopNav onClick={e => this.props.dispatch(getCharacters(e))}/>
                    <Torch1 />
                    <div className="character-card">
                        <label>Name:</label>
                        <h3>{this.props.name}</h3>
                        <label>Race:</label>
                        <h3>{this.props.race}</h3>
                        <label>Class:</label>
                        <h3>{this.props.class}</h3>
                        <label>Weapon:</label>
                        <h3>{this.props.weapon}</h3>
                    </div>
                    <Torch2 />
                </div>
            );
        } else if (this.props.display === "characters") {
            let characters = this.props.characters.map((character, index) => (

                <li key={index} className="characters">
                    <p>{character.name}</p>
                    <p>{character.race}</p>
                    <p>{character.class}</p>
                    <p>{character.weapon}</p>
                    <button onClick={(id) => this.props.dispatch(deleteCharacter(character.id))} >Delete</button>
                </li>));

            return (
                <div className="character-list">
                    <Torch1 />
                    <div className="character-display">
                        <TopNav onClick={e => this.props.dispatch(getCharacters(e))} />
                        <h3 className="title">Existing Characters</h3>
                        <ul >{characters}</ul>
                    </div>
                    <Torch2 />
                </div>
            )
        }
    };
};

const mapStateToProps = (store) => {
    return {
        characters: store.characters,
        display: store.display,
        name: store.name,
        race: store.race,
        class: store.class,
        weapon: store.weapon
    }
};

export default connect(mapStateToProps)(Builder);