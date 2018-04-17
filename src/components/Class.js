import React from 'react';
import Dropdown from 'react-dropdown';

const options = [
  'Cleric', 'Barbarian', 'Wizard'
];
const defaultOption = options[0];

export default class Class extends React.Component {
  constructor(){
  super();
  this.state = {
    class: ''
  }
  }

  setClass(options){
    this.setState({
      class: {options} 
    });
  }

  render(){
    return (
      <div className="builder-choices">
        <h4>Character Class</h4>
        <Dropdown options={options} value="[***]" className="options" onChange={options => this.setClass(options)}/>
      </div>
    )
};
};



/*export default function Class() {
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
}*/