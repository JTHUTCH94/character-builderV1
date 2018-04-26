import React from 'react';

export default function Class(props){
  return (
    <div className="class">
    <h3 className="title">Choose your Classification</h3>
    <div className="builder-choices">
        <label className="choice-label">
            <input className="choice" type="radio" value="Cleric" name="classification" onChange={e => props.onChange(e)} />
            Cleric</label>
        <label className="choice-label">
            <input className="choice" type="radio" value="Barbarian" name="classification" onChange={e => props.onChange(e)} /> Brute</label>
        <label className="choice-label">
            <input className="choice" type="radio" value="Wizard" name="classification" onChange={e => props.onChange(e)} />
            Wizard</label>
        <label className="choice-label">
            <input className="choice" type="radio" value="Bard" name="classification" onChange={e => props.onChange(e)} />
            Bard</label>
        <label className="choice-label">
            <input className="choice" type="radio" value="Rogue" name="classification" onChange={e => props.onChange(e)} />
            Rogue</label>
        <label className="choice-label">
            <input className="choice" type="radio" value="Knight" name="classification" onChange={e => props.onChange(e)} />
            Knight</label>
        <div className="current-choice">{props.classification}</div>
    </div>
</div>
  )
}