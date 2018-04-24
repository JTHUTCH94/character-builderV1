import React from 'react';

export default function Delete(props){
    return <input type="button" value="Delete" onClick={e => props.onClick(e)} />
}