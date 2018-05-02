import React from 'react';
import { shallow } from 'enzyme';

import EnterScreen from './EnterScreen';

describe('<EnterScreen/>', () => {
    it('Renders without crashing', () => {
        shallow(<EnterScreen/>);
    });
});