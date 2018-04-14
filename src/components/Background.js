import React from 'react';

export default function Background() {
    return (
        <div className="bio">
            <label className=" text-label">Name</label>
            <input type="text" className="text-field" />
            <label className=" text-label">Background</label>
            <input type="text" className="text-field" />
            <label className=" text-label">Appearance</label>
            <input type="text" className="text-field" />
          </div>
    )
}