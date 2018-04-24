import React from 'react';
import Dropdown from 'react-dropdown';


/*
const options = [
  'Mace', 'Battle-Axe', 'Staff'
];
const defaultOption = options[0];

export default class Weapon extends React.Component {
  constructor(){
    super();
    this.state = {
      weapon: ''
    }
    }
  
    setWeapon(options){
      this.setState({
        weapon: {options} 
      });
    }

    render(){
    return (  
      <div className="builder-choices">
        <h4>Weapon Choice</h4>
        <Dropdown options={options} value="[***]" className="options" onChange={options => this.setWeapon(options)}/>
      </div>
  )
};
};*/
export default class Weapon extends React.Component {
  constructor(){
  super();
  
  this.state = {
    weapon: ''
  }
  }
  
  setWeapon(e){
    this.setState({
      weapon: e.target.value
    });
  }

  render(){

    return (
        <div className="weapon">
        <h3 className="title">Choose your Weapon</h3>
          <div className="builder-choices">
          <input className="choice" type="button" value="Mace" onClick={e => this.setWeapon(e)}/>
            <input className="choice" type="button" value="Axe" onClick={e => this.setWeapon(e)}/>
            <input className="choice" type="button" value="Staff" onClick={e => this.setWeapon(e)}/>
            <div className="current-weapon">{this.state.weapon}</div>
          </div>
          </div>
    )
};
};