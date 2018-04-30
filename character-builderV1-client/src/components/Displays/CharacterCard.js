import React from 'react';
import { connect } from 'react-redux';

function CharacterCard(props) {
    console.log(props);
    return (
        <div className="character-card">
            <div className="character-name">
                <label>
                    Name
                        <h3>{props.name}</h3>
                </label>
            </div>
            <div className="character-race">
                <label>
                    Race
                        <h3>{props.race}</h3>
                </label>
            </div>
            <div className="character-classification">
                <label>
                    Classification
                        <h3>{props.classification}</h3>
                </label>
            </div>
            <div className="character-weapon">
                <label>
                    Weapon
                        <h3>{props.weapon}</h3>
                </label>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: state.name,
    race: state.race,
    classification: state.classification,
    weapon: state.weapon
});

export default connect(mapStateToProps)(CharacterCard);