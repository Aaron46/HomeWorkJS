import React, { Component } from 'react';
import Recipe from './recipe.js';

export default class RecipeList extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        return (
            <div>im List
                <Recipe name="peas" instructions="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, excepturi!" />
                <Recipe name="carrpts" instructions="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam, excepturi!" />
            </div>
        );

    }
}