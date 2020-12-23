import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {name:'Anshika is Love <3'}
    }
    
    render() {
        return (
            <div>
                <h3>{this.state.name}</h3>
                <form>
                    <label htmlFor="name">Name here</label>
                    <input type="text" id='name' value={this.state.name} onChange={(event)=>{
                        this.setState({name:event.target.value})
                        console.log(this.state.name)
                    }}/>
                </form>
            </div>
        );
    }
}

export default Form;
