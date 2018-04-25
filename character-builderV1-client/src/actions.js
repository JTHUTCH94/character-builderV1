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
            "class":  e.target.class.value,
            "weapon":  e.target.weapon.value
        })
        .then(res => res.json())
        .then(res => dispatch(createCharacter(res)))
    });
};

export const SET_NAME = 'SET_NAME';
export const setName = (e) => ({
    type: SET_NAME,
    e
});

export const setNameAction = (e) => {
    this.props.dispatch(setName(e.target.value));
}

export const SET_RACE = 'SET_RACE';
export const setRace = (e) => ({
    type: SET_RACE,
    e
});

export const setRaceAction = (e) => {
    this.props.dispatch(setRace(e.target.value));
};

export const SET_CLASS = 'SET_CLASS';
export const setClass = (e) => ({
    type: SET_CLASS,
    e
});

export const setClassAction = (e) => {
    this.props.dispatch(setClass(e.target.value));
};

export const SET_WEAPON = 'SET_WEAPON';
export const setWeapon = (e) => ({
    type: SET_WEAPON,
    e
});

export const setWeaponAction = (e) => {
    this.props.dispatch(setWeapon(e.target.value));
}

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
export const updateCharacter = (character) => ({
    type: UPDATE_CHARACTER,
    character
});*/