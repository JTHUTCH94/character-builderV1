import React from 'react';

export default function Class() {
    return (
        <div className="class">
        <h4>Choose your Class</h4>
          <div className="builder-choices">
            <input className="choice" type="radio" value="cleric" />
            <label className="choice" >Cleric</label>
            <input className="choice" type="radio" value="barbarian" />
            <label className="choice" >Barbarian</label>
            <input className="choice" type="radio" value="Wizard" />
            <label className="choice" >Wizard</label>
          </div>
          </div>
    )
}