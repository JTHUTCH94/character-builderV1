import React from 'react';
import Dropdown from 'react-dropdown';



const options = [
  'Human', 'Elf', 'Orc'
];
const defaultOption = options[0];


export default class Race extends React.Component {
  constructor(){
  super();
  this.state = {
    race: ''
  }
  }

  setRace(options){
    this.setState({
      race: {options}
    });
  }

  render(){
    return (
      <div className="builder-choices">
        <h4>Character Race</h4>
        <Dropdown options={options} value="[***]" className="options" onChange={options => this.setRace(options)}/>
      </div>
    )
};
};



/*<div className="race">
        <h4>Choose your Race</h4>
          <div className="builder-choices">
            <input className="choice" type="radio" value="human" />
            <label className="choice" >Human</label>
            <input className="choice" type="radio" value="elf" />
            <label className="choice" >Elf</label>
            <input className="choice" type="radio" value="orc" />
            <label className="choice" >Orc</label>
          </div>
          </div>*/