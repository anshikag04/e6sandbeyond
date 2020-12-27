import { Component } from 'react';

class StateLearn extends Component {

    constructor(props){
        super(props)
        this.state = {result: "Hello!", name: ''}
    }

    changeValueOfName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    greetUser = (event) =>{
        this.setState({
            result: `Hello! ${this.state.name}`
        })
    }

    render() {
        return (
            <div>
                <div className="input-group">
                    <label htmlFor="name">Enter your Name: </label>
                    <input type="text" id="name" value= {this.state.name}
                        onChange = {this.changeValueOfName}
                    />
                    <button
                        onClick = {this.greetUser}
                    >Greet</button>
                </div>
                <h3>
                    {this.state.result}
                </h3>
            </div>
        );
    }
}

export default StateLearn;
