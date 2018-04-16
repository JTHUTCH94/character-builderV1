import { CREATE_CHARACTER } from './actions';

const initialState = {
    race: '',
    style: '',
    weapon: ''
};

export default (state === initialState, action) => {
    if(action.type === CREATE_CHARACTER) {
        return Object.assign({}, state, {
            race: state.race,
            style: state.style,
            weapon: state.weapon
        });
    }
    return state;
};