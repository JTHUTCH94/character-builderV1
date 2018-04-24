import React from 'react';
import Dropdown from 'react-dropdown';

/*export default function Race(props){
  return <ul>{props.race}</ul>
};*/

export default class Race extends React.Component {
constructor(){
super();

this.state = {
  race: ''
}
}

setRace(e){
  this.setState({
    race: e.target.value
  });
}

render(){

return(
<div className="race">
        <h3 className="title">Choose your Race</h3>
          <div className="builder-choices">
            <input className="choice" type="button" value="Human" onClick={e => this.setRace(e)}/>
            <input className="choice" type="button" value="Elf" onClick={e => this.setRace(e)}/>
            <input className="choice" type="button" value="Orc" onClick={e => this.setRace(e)}/>
            <div className="current-race">{this.state.race}</div>
          </div>
          </div>)};
};