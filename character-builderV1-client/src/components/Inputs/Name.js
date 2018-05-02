import React from 'react';
import { connect } from 'react-redux';

function Name(props) {
    return (
        <div>
            <label htmlFor="text-input" className="name-plate">
            Name
            <br />
            <input type="text" className="name" name="name" value={props.name} onChange={e => props.onInput(e)} />
            </label>
        </div>
    )
}

const mapStateToProps = (state) =>({
    name: state.name
});

export default connect(mapStateToProps)(Name);