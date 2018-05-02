import React from 'react';
import { connect } from 'react-redux';

function Class(props){
  return (
    <div className="class" name="character-class-input">
    <fieldset className="builder-choices" name="character-class-choices">
    <legend className="title" name="character-class-input-title">Choose your Classification</legend>

        <label className="choice-label" htmlFor="class-choice">
            <input className="choice" type="radio" value="Cleric" name="classification" onChange={e => props.onChange(e)} />
            Cleric</label>
        <label className="choice-label" htmlFor="class-choice">
            <input className="choice" type="radio" value="Brute" name="classification" onChange={e => props.onChange(e)} /> Brute</label>
        <label className="choice-label" htmlFor="class-choice">
            <input className="choice" type="radio" value="Wizard" name="classification" onChange={e => props.onChange(e)} />
            Wizard</label>
        <label className="choice-label" htmlFor="class-choice">
            <input className="choice" type="radio" value="Bard" name="classification" onChange={e => props.onChange(e)} />
            Bard</label>
        <label className="choice-label" htmlFor="class-choice">
            <input className="choice" type="radio" value="Rogue" name="classification" onChange={e => props.onChange(e)} />
            Rogue</label>
        <label className="choice-label" htmlFor="class-choice">
            <input className="choice" type="radio" value="Knight" name="classification" onChange={e => props.onChange(e)} />
            Knight</label>
        <div className="current-choice">{props.classification}</div>
    </fieldset>
</div>
  )
}

const mapStateToProps = (store) => ({
    classification: store.classification
});

export default connect(mapStateToProps)(Class);