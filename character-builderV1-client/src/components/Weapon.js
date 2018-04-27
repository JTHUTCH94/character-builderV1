import React from 'react';
import { connect } from 'react-redux';

function Weapon(props) {
  return (
    <div className="weapon">
      <h3 className="title">Choose your Weapon</h3>
      <div className="builder-choices">
        <label className="choice-label">
          <input className="choice" type="radio" value="Mace" name="weapon" onChange={e => props.onChange(e)} />
          Mace</label>
        <label className="choice-label">
          <input className="choice" type="radio" value="Axe" name="weapon" onChange={e => props.onChange(e)} />
          Axe</label>
        <label className="choice-label">
          <input className="choice" type="radio" value="Staff" name="weapon" onChange={e => props.onChange(e)} />
          Staff</label>
        <label className="choice-label">
          <input className="choice" type="radio" value="Sword" name="weapon" onChange={e => props.onChange(e)} />
          Sword</label>
        <label className="choice-label">
          <input className="choice" type="radio" value="Hammer" name="weapon" onChange={e => props.onChange(e)} />
          Hammer</label>
        <label className="choice-label">
          <input className="choice" type="radio" value="Dagger" name="weapon" onChange={e => props.onChange(e)} />
          Dagger</label>
        <div className="current-choice">{props.weapon}</div>
      </div>
    </div>
  )
}

const mapStateToProps = (store) => ({
  weapon: store.weapon
});

export default connect(mapStateToProps)(Weapon);