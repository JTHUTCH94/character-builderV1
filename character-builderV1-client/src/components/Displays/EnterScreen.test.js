import React from 'react';
import { shallow, mount } from 'enzyme';

import EnterScreen from './EnterScreen';

describe('<EnterScreen/>', () => {
    it('Renders without crashing', () => {
        shallow(<EnterScreen/>);
    });

    it('Renders the enter button initially', () => {
        const wrapper = mount(<EnterScreen/>);
        console.log(wrapper);
        expect(wrapper.find('button').hasClass('enter-button')).toEqual(true);
    });

    it('Triggers an onClick event', () => {
        const dispatch = jest.fn();
        const wrapper = mount(<EnterScreen onClick={dispatch}/>);
        wrapper.find('button').simulate('click', {preventDefault(){}});
        expect(dispatch).toHaveBeenCalled()
    });
});