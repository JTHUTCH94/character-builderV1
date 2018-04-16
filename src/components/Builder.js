import React from 'react';

import Class from './Class';
import Race from './Race';
import Weapon from './Weapon';
import Background from './Background';
import Save from './Save';

export default function Builder() {
    return (
        <form className="builder">
            <h2>Build your character</h2>
            <Race />
            <Class />
            <Weapon />
            <Background />
            <Save />
        </form>
    )
}