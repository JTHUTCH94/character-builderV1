import { CREATE_CHARACTER } from './actions';

const initialState = {
    race: '',
    class: '',
    weapon: ''
};

export default (state = initialState, action) => {
    if(action.type === CREATE_CHARACTER) {
        return Object.assign({}, state, {
            race: this.state.race,
            class: this.state.class,
            weapon: this.state.weapon
        });
    }
    return state;
};