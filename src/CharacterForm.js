import React, { Component } from 'react';
import './CharacterForm.css';
import TopNav from './components/TopNav';
import Builder from './components/Builder';

class CharacterForm extends Component {
  render() {
    return (
      <div className="character-form">
        <TopNav />
        <Builder />
      </div>
    );
  }
}

export default CharacterForm;
