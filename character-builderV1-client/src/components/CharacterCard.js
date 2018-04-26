import React from 'react';

export default function CharacterCard(props){
    return (
        <div className="character-card">
                        <label>Name:</label>
                        <h3>{props.name.value}</h3>
                        <label>Race:</label>
                        <h3>{props.race.value}</h3>
                        <label>Classification:</label>
                        <h3>{props.classification.value}</h3>
                        <label>Weapon:</label>
                        <h3>{props.weapon.value}</h3>
                    </div>
    )
}