import React, { Component } from 'react';
import './CharacterForm.css';
import TopNav from './components/TopNav';
import Builder from './components/Builder';
import Torch1 from './components/Torch1';
import Torch2 from './components/Torch2';

class CharacterForm extends Component {
  constructor(){
  super();

  this.state={
    display: 'hidden'
  }
  };

  showForm(){
    this.setState({
      display: 'form'
    });
  }

  render() {
    if(this.state.display === 'hidden'){
      return (
      <div className="enter-page">
      <Torch1 />
      <h1 className="enter-sign">Follow the Flame to Begin</h1>
      <input type="button" value="Enter" onClick={e => this.showForm()} className="enter"/>
      <div className="torch3">
        <div className="flame3">
            <div className="red flame"></div>
            <div className="orange flame"></div>
            <div className="yellow flame"></div>
            <div className="white flame"></div>
        </div>
        </div>
        <label className="enter-label" />
      <Torch2 />
      </div>)
    } else if(this.state.display === 'form'){
    return (
      <div className="form-body">
      <Torch1 />
        <div className="character-form">
          <TopNav />
          <Builder />
        </div>
      <Torch2 />
      </div>
    );
  }
}
}

export default CharacterForm;
