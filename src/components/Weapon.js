import React from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'Mace', 'Battle-Axe', 'Staff'
];
const defaultOption = options[0];


export default function Weapon() {
    return (
<div className="builder-choices">
        <h4>Weapon Choice</h4>
        <Dropdown options={options} value="[***]" className="options"/>
      </div>    )
}


/*export default function Weapon() {
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
}*/