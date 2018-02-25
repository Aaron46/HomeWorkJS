import React, { Component } from 'react';

export default class Student extends Component {
    render() {

        const marks = this.props.student.score.map((score, i) => <li>key={i} {score}</li>);

        return (
            <div>
                <h1>{this.props.student.name}</h1>
                <ul>{marks}</ul>
            </div>
        );
    }
}