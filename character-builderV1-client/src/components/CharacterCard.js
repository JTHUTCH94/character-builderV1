import React from 'react';
import { connect } from 'react-redux';

function CharacterCard(props){
    return (
        <div className="character-card">
                        <label>Name:</label>
                        <h3>{props.name}</h3>
                        <label>Race:</label>
                        <h3>{props.race}</h3>
                        <label>Classification:</label>
                        <h3>{props.classification}</h3>
                        <label>Weapon:</label>
                        <h3>{props.weapon}</h3>
                    </div>
    )
}

const mapStateToProps = (store) => ({
    name: store.name,
    race: store.race,
    classification: store.classification,
    weapon: store.weapon
});

export default connect(mapStateToProps)(CharacterCard);