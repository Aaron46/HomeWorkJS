import React, { Component } from 'react';

export default class RecipeBook extends Component {

    handleClick() {
        return "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, excepturi!";
    }

    render() {
        return (<div>im Book
            <button onClick={this.handleClick}> Click Me! </button >
        </div>);

    }
}