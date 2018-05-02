import React from 'react';
import { connect } from 'react-redux';

function Race(props) {

return(
<div className="race" name="character-race-input">

<fieldset className="builder-choices" name="characer-race-input-choices">
<legend className="title" name="character-race-input-title">Choose your Race</legend>
    <label className="choice-label" htmlFor="race-choices">
        <input className="choice" type="radio" value="Human" name="race" onChange={e => props.onChange(e)} />
        Human </label>
    <label className="choice-label" htmlFor="race-choices">
        <input className="choice" type="radio" value="Elf" name="race" onChange={e => props.onChange(e)} />
        Elf</label>
    <label className="choice-label" htmlFor="race-choices">
        <input className="choice" type="radio" value="Orc" name="race" onChange={e => props.onChange(e)} />
        Orc</label>
    <label className="choice-label" htmlFor="race-choices">
        <input className="choice" type="radio" value="Halfling" name="race" onChange={e => props.onChange(e)} />
        Halfling</label>
    <label className="choice-label" htmlFor="race-choices">
        <input className="choice" type="radio" value="Dwarf" name="race" onChange={e => props.onChange(e)} />
        Dwarf</label>
    <label className="choice-label" htmlFor="race-choices">
        <input className="choice" type="radio" value="Golem" name="race" onChange={e => props.onChange(e)} />
        Golem</label>
    <div className="current-choice">{props.race}</div>
</fieldset>
</div>)
}

const mapStateToProps = (store) => ({
    race: store.race
});

export default connect(mapStateToProps)(Race);