export const CREATE_CHARACTER = 'CREATE_CHARACTER';
export const createCharacter = (newCharacter) => ({
    type: CREATE_CHARACTER,
    newCharacter
});

export const GET_CHARACTER = 'GET_CHARACTER';
export const getCharacter = (character) => ({
    type: GET_CHARACTER,
    character
});

export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const deleteCharacter = (character) => ({
    type: DELETE_CHARACTER,
    character
});

/*export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
export const updateCharacter = (character) => ({
    type: UPDATE_CHARACTER,
    character
});*/