import { CREATE_CHARACTER, GET_CHARACTERS, DELETE_CHARACTER, SET_NAME, SET_RACE, SET_CLASS, SET_WEAPON, SET_DISPLAY } from './actions';

const initialState = {
    characters: [],
    display: 'form',
    name: '',
    race: '',
    class: '',
    weapon: ''
};

export default (state = initialState, action) => {
    if(action.type === CREATE_CHARACTER) {
        return Object.assign({}, state, {
            name: action.name,
            race: action.race,
            class: action.class,
            weapon: action.weapon
        });
    } else if(action.type === SET_NAME){
        return Object.assign({}, state, {
            name: action.name
        });
    } else if(action.type === SET_RACE){
        return Object.assign({}, state, {
            race: action.race
        });
    } else if(action.type === SET_CLASS){
        return Object.assign({}, state, {
            class: action.class
        });
    } else if(action.type === SET_WEAPON){
        return Object.assign({}, state, {
            weapon: action.weapon
        });
    } else if(action.type === SET_DISPLAY){
        return Object.assign({}, state, {
            display: 'newCharacter'
        });
    } else if (action.type === GET_CHARACTERS){
        return Object.assign({}, state, {
            characters: action.characters,
            display: 'characters'
        });
    } else if(action.type === DELETE_CHARACTER){
        return Object.assign({}, state, {
            characters: state.characters.filter(character => !character.id === action.id)
        });
    }
    return state;
};