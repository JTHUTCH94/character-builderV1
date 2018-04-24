import React from 'react';
import { connect } from 'react-redux';
import './Builder.css';
import TopNav from './components/TopNav';
import Torch1 from './components/Torch1';
import Torch2 from './components/Torch2';
import './components/Torch.css';
import Background from './components/Background';
import Delete from './components/Delete';

class Builder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            display: 'form',
            name: '',
            race: '',
            class: '',
            weapon: ''
        };
    }

    

    setName(e) {
        this.setState({
            name: e.target.value
        });
    }

    setRace(e) {
        this.setState({
            race: e.target.value
        });
    };

    setClass(e) {
        this.setState({
            class: e.target.value
        });
    };

    setWeapon(e) {
        this.setState({
            weapon: e.target.value
        });
    }

    setDisplay(e) {
        this.setState({
            display: 'new-character'
        });
    }

    showCharacters(e) {
        e.preventDefault();
        this.setState({
            display: 'characters'
        });
        return fetch('http://localhost:8080/api/characters', {
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => this.setState({
                characters: data
            }));
    }

    
    deleteCharacter(character){
        return fetch('http://localhost:8080/api/characters/:id', {
            method: 'DELETE'
        });
    }


    handleSubmit(e) {
        e.preventDefault();
        return fetch('http://localhost:8080/api/characters', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name": this.state.name,
                "race": this.state.race,
                "class": this.state.class,
                "weapon": this.state.weapon
            })
        });
    };

    render() {
        if (this.state.display === 'form') {
            return (
                <div className="character-form">
                    <TopNav onClick={e => this.showCharacters(e)} />
                    <Torch1 />
                    <form className="builder" onSubmit={(e) => { this.handleSubmit(e); this.setDisplay(e) }}>
                        <h2 className="title">Build your character</h2>
                        <label className="title">Name</label>
                        <input type="text" className="name" onInput={e => this.setName(e)} />
                        <div className="race">
                            <h3 className="title">Choose your Race</h3>
                            <div className="builder-choices">
                                <input className="choice" type="button" value="Human" onClick={e => this.setRace(e)} />
                                <input className="choice" type="button" value="Elf" onClick={e => this.setRace(e)} />
                                <input className="choice" type="button" value="Orc" onClick={e => this.setRace(e)} />
                                <div className="current-race">{this.state.race}</div>
                            </div>
                        </div>
                        <div className="class">
                            <h3 className="title">Choose your Class</h3>
                            <div className="builder-choices">
                                <input className="choice" type="button" value="Cleric" onClick={e => this.setClass(e)} />
                                <input className="choice" type="button" value="Barbarian" onClick={e => this.setClass(e)} />
                                <input className="choice" type="button" value="Wizard" onClick={e => this.setClass(e)} />
                                <div className="current-class">{this.state.class}</div>
                            </div>
                        </div>
                        <div className="weapon">
                            <h3 className="title">Choose your Weapon</h3>
                            <div className="builder-choices">
                                <input className="choice" type="button" value="Mace" onClick={e => this.setWeapon(e)} />
                                <input className="choice" type="button" value="Axe" onClick={e => this.setWeapon(e)} />
                                <input className="choice" type="button" value="Staff" onClick={e => this.setWeapon(e)} />
                                <div className="current-weapon">{this.state.weapon}</div>
                            </div>
                        </div>
                        <br />
                        <Background />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                    <Torch2 />
                </div>
            )
        } else if (this.state.display === 'new-character') {
            return (
                <div className="new-character">
                    <TopNav onClick={e => this.showCharacters(e)} />
                    <Torch1 />
                    <div className="character-card">
                        <label>Name:</label>
                        <h3>{this.state.name}</h3>
                        <label>Race:</label>
                        <h3>{this.state.race}</h3>
                        <label>Class:</label>
                        <h3>{this.state.class}</h3>
                        <label>Weapon:</label>
                        <h3>{this.state.weapon}</h3>
                    </div>
                    <Torch2 />
                </div>
            )
        } else if (this.state.display === "characters") {
            let characters = this.state.characters.map(character => (

                <li className="characters">
                    <p>{character.name}</p>
                    <p>{character.race}</p>
                    <p>{character.class}</p>
                    <p>{character.weapon}</p>
                    <Delete onClick={character => this.deleteCharacter(character)}/>
                </li>));

            return (
                <div className="character-list">
                <Torch1 />
                    <TopNav onClick={e => this.showCharacters(e)} />
                    <ul className="character-display">{characters}</ul>
                <Torch2 />
                </div>
            )
        }
    };
};


export default connect()(Builder);