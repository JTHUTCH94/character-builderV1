import React from 'react';
import Dropdown from 'react-dropdown';

/*const options = [
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
};*/

export default class Class extends React.Component {
  constructor(){
  super();
  
  this.state = {
    class: ''
  }
  }
  
  setClass(e){
    this.setState({
      class: e.target.value
    });
  }
  
  render(){

    return(
        <div className="class">
        <h3 className="title">Choose your Class</h3>
          <div className="builder-choices">
          <input className="choice" type="button" value="Cleric" onClick={e => this.setClass(e)}/>
            <input className="choice" type="button" value="Barbarian" onClick={e => this.setClass(e)}/>
            <input className="choice" type="button" value="Wizard" onClick={e => this.setClass(e)}/>
            <div className="current-class">{this.state.class}</div>
          </div>
          </div>
    )
};
};