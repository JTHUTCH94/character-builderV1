import { CREATE_CHARACTER, GET_CHARACTER, DELETE_CHARACTER } from './actions';

const initialState = {
    characters: [],
    name: '',
    race: '',
    class: '',
    weapon: ''
};

export default (state = initialState, action) => {
    if(action.type === CREATE_CHARACTER) {
        return Object.assign({}, state, {
            name: action.newCharacter.name,
            race: action.newCharacter.race,
            class: action.newCharacter.class,
            weapon: action.newCharacter.weapon
        });
    } else if (action.type === GET_CHARACTER){
        return Object.assign({}, state, {
            characters: action.character
        });
    } else if(action.type === DELETE_CHARACTER){
        return Object.assign({}, state, {
            characters: state.characters
        });
    }
    return state;
};