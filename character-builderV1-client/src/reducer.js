import { ENTER_SCREEN, CREATE_FORM, CREATE_CHARACTER, GET_CHARACTERS, DELETE_CHARACTER, SET_NAME, SET_RACE, SET_CLASSIFICATION, SET_WEAPON, SET_DISPLAY, UPDATE_CHARACTER, SET_UPDATE } from './actions';

const initialState = {
    characters: [],
    display: 'enter-screen',
    name: '',
    race: '',
    classification: '',
    weapon: '',
};

export default (state = initialState, action) => {
    if(action.type === ENTER_SCREEN){
        return Object.assign({}, state, {
                display: 'form'
            });
    } else if(action.type === CREATE_FORM){
        return Object.assign({}, state, {
                display: 'form',
                name: '',
                race: '',
                classification: '',
                weapon: ''
            });
    } else if(action.type === CREATE_CHARACTER) {
        return Object.assign({}, state, {
            name: action.newCharacter.name,
            race: action.newCharacter.race,
            classification: action.newCharacter.classification,
            weapon: action.newCharacter.weapon
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
    } else if (action.type === SET_UPDATE){
        return Object.assign({}, state, {
            display: 'update',
            name: action.character.name,
            race: action.character.race,
            classification: action.character.classification,
            weapon: action.character.weapon,
            id: action.character.id
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
    } else if(action.type === UPDATE_CHARACTER){
        console.log(action.updatedCharacter.name);
        return Object.assign({
            display: 'updated-character',
            name: action.updatedCharacter.name,
            race: action.updatedCharacter.race,
            classification: action.updatedCharacter.classification,
            weapon: action.updatedCharacter.weapon
        });
    } 
    return state;
};