import React from 'react';
import { connect } from 'react-redux';

function Name(props) {
    return (
        <div>
            <label className="name-plate">Name</label>
            <input type="text" className="name" name="name" value={props.name} onChange={e => props.onInput(e)} />
        </div>
    )
}

const mapStateToProps = (state) =>({
    name: state.name
});

export default connect(mapStateToProps)(Name);