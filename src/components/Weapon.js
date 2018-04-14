import React from 'react';

export default function Weapon() {
    return (
        <div className="weapon">
        <h4>Choose your Weapon</h4>
          <div className="builder-choices">
            <input className="choice" type="radio" value="mace" />
            <label className="choice" >Mace</label>
            <input className="choice" type="radio" value="battle-axe" />
            <label className="choice" >Battle-Axe</label>
            <input className="choice" type="radio" value="Staff" />
            <label className="choice" >Staff</label>
          </div>
          </div>
    )
}