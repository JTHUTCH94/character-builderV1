import React from 'react';

export default class Background extends React.Component {
    constructor(){
    super();

    this.state = {
        display: 'button',
        name: '',
        background: '',
        appearance: ''
    }
    }

    showForm(){
        this.setState({
            display: 'form'
        });
    }

    hideForm(){
        this.setState({
            display: 'button'
        });
    }

    setName(e){
            this.setState({
            name: e.target.value
        });
    }

    setBackground(e){
        this.setState({
            background: e.target.value
        });
    }

    setAppearance(e){
        this.setState({
            appearance: e.target.value
        });
    }

    render(){
        if(this.state.display === 'button'){
            return (
                <input type="button" className="show-form" value="Background" onClick={e => this.showForm(e)}/>
            )
        } else if(this.state.display === 'form'){
        return (
            <div className="bio">
            <h4 className="background-title">Background</h4>
                <div className="background">
                    <label className="background-title">Name</label>
                    <input type="text" className="text-field" onInput={e => this.setName(e)}/>
                    <label className="background-title">Background</label>
                    <input type="text" className="text-field" onInput={e => this.setBackground(e)}/>
                    <label className="background-title">Appearance</label>
                    <input type="text" className="text-field" onInput={e => this.setAppearance(e)}/>
                <br />
                </div>
                <input type="button" className="hide-form" value="Hide Background" onClick={e => this.hideForm(e)} />
            </div>)
    }
};
};