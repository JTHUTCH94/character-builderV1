import { CREATE_CHARACTER, GET_CHARACTERS, DELETE_CHARACTER, SET_NAME, SET_RACE, SET_CLASSIFICATION, SET_WEAPON, SET_DISPLAY, UPDATE_CHARACTER, SET_BACKGROUND, SET_APPEARANCE } from './actions';

const initialState = {
    characters: [],
    display: 'form',
    name: '',
    race: '',
    classification: '',
    weapon: '',
    background: '',
    appearance: ''
};

export default (state = initialState, action) => {
    if(action.type === CREATE_CHARACTER) {
        return Object.assign({}, state, {
            name: state.name,
            race: state.race,
            classification: state.classification,
            weapon: state.weapon,
            background: state.background,
            appearance: state.appearance
        });
    } else if(action.type === SET_NAME){
        return Object.assign({}, state, {
            name: action.name
        });
    } else if(action.type === SET_RACE){
        return Object.assign({}, state, {
            race: action.race
        });
    } else if(action.type === SET_CLASSIFICATION){
        return Object.assign({}, state, {
            classification: action.classification
        });
    } else if(action.type === SET_WEAPON){
        return Object.assign({}, state, {
            weapon: action.weapon
        });
    } /*else if(action.type === SET_BACKGROUND){
        return Object.assign({}, state, {
            background: action.background
        });
    } else if(action.type === SET_APPEARANCE){
       return Object.assign({}, state, {
           appearance: action.appearance
       }); 
    }*/ else if(action.type === SET_DISPLAY){
        return Object.assign({}, state, {
            display: 'new-character'
        });
    } else if (action.type === GET_CHARACTERS){
        return Object.assign({}, state, {
            characters: action.characters,
            display: 'characters'
        });
    } else if(action.type === DELETE_CHARACTER){
        return Object.assign({}, state, {
            characters: state.characters.filter(character => character.id !== action.id)
        });
    } /*else if(action.type === UPDATE_CHARACTER){
        return Object.assign({
            display: 'update',
            name: action.name,
            race: action.race,
            classification: action.classification,
            weapon: action.weapon
        });
    }*/
    return state;
};