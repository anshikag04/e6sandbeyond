import React, { Component } from 'react';
import axios from 'axios';

class Babes extends Component {
    constructor(props) {
        super(props);
        this.state = {babes:[]}
    }
    componentDidMount(){ 
        axios.get('http://localhost:5500/getList').then((response)=>{
            this.setState({babes:response.data.babes})
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.babes.map((babe)=>{return (
                        <li>{babe}</li>
                    )})}
                </ul>
            </div>
        );
    }
}

export default Babes;
