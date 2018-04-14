import React from 'react';

export default function Race() {
    return (
        <div className="race">
        <h4>Choose your Race</h4>
          <div className="builder-choices">
            <input className="choice" type="radio" value="human" />
            <label className="choice" >Human</label>
            <input className="choice" type="radio" value="elf" />
            <label className="choice" >Elf</label>
            <input className="choice" type="radio" value="orc" />
            <label className="choice" >Orc</label>
          </div>
          </div>
    )
}