import React from 'react';

export default function Name(props) {
    return (
        <div>
            <label className="name-plate">Name</label>
            <input type="text" className="name" name="name" onInput={e => props.onInput(e)} />
        </div>
    )
}