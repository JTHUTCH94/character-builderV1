export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const createCharacter = (newCharacter) => ({
    type: CREATE_CHARACTER,
    newCharacter
});

export const createCharacterAction = (e) => dispatch => {
    return fetch('http://localhost:8080/api/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "name": e.target.name.value,
            "race": e.target.race.value,
            "classification": e.target.classification.value,
            "weapon":  e.target.weapon.value
        })})
        .then(res => res.json())
        .then(res => dispatch(createCharacter(res)))
    };

export const SET_NAME = 'SET_NAME';
export const setName = (name) => ({
    type: SET_NAME,
    name
});

export const setNameAction = (e) => {
    this.props.dispatch(setName(e.target.value));
}

export const SET_RACE = 'SET_RACE';
export const setRace = (race) => ({
    type: SET_RACE,
    race
});

export const setRaceAction = (e) => {
    this.props.dispatch(setRace(e.target.value));
};

export const SET_CLASSIFICATION = 'SET_CLASSIFICATION';
export const setClassification = (classification) => ({
    type: SET_CLASSIFICATION,
    classification
});

export const setClassificationAction = (e) => {
    this.props.dispatch(setClassification(e.target.value));
};

export const SET_WEAPON = 'SET_WEAPON';
export const setWeapon = (weapon) => ({
    type: SET_WEAPON,
    weapon
});

export const setWeaponAction = (e) => {
    this.props.dispatch(setWeapon(e.target.value));
}

/*export const SET_BACKGROUND = 'SET_BACKGROUND';
export const setBackground = (background) => ({
    type: SET_BACKGROUND,
    background
});

export const setBackgroundAction = (e) => {
    this.props.dispatch(setBackground(e.target.value));
}

export const SET_APPEARANCE = 'SET_APPEARANCE';
export const setAppearance = (appearance) => ({
    type: SET_APPEARANCE,
    appearance
});

export const setAppearanceAction = (e) => {
    this.props.dispatch(setAppearance(e.target.value));
}*/

export const SET_DISPLAY = 'SET_DISPLAY';
export const setDisplay = (e) => ({
    type: SET_DISPLAY,
    e
});

export const setDisplayAction = (e) => {
    this.setState({
        display: 'new-character'
    });
}

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const getCharacters = (characters) => ({
    type: GET_CHARACTERS,
    characters
});


export const getCharactersAction = (characters) => dispatch => {
    return fetch('http://localhost:8080/api/characters', {
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
        .then(res => dispatch(getCharacters(res)));
    this.setState ={
            display: 'characters'
        };
}

export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const deleteCharacter = (id) => ({
    type: DELETE_CHARACTER,
    id
});

export const deleteCharacterAction = (id) => dispatch =>{

    return fetch('http://localhost:8080/api/characters/' + id, {
        method: 'DELETE'
    })
    .then(res => dispatch(deleteCharacter(id)))
    .catch(err => console.log(err));
}

/*export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
export const updateCharacter = (id) => ({
    type: UPDATE_CHARACTER,
    id
});

export const updateCharacterAction = (id) => dispatch =>{

    return fetch('http://localhost:8080/api/characters/' + id, {
        method: 'PUT'
    })
    .then(res => dispatch(updateCharacter(id)))
    .catch(err => console.log(err));
}*/