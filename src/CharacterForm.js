import React, { Component } from 'react';
import './CharacterForm.css';
import TopNav from './components/TopNav';
import Builder from './components/Builder';
import Torch1 from './components/Torch1';
import Torch2 from './components/Torch2';

class CharacterForm extends Component {
  render() {
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

export default CharacterForm;
