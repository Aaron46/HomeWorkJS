import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = { showInstructions: false };
        this.state = { toggle: true };
    }


    handleClick = () => {
        this.setState({ showInstructions: !this.state.showInstructions });
        this.setState({ toggle: !this.state.toggle });

    }

    render() {

        let myInsructions = this.state.showInstructions ? <h2>{this.props.instructions}</h2> : null;
        let toggle = this.state.toggle ? 'show instructions' : 'hide';
        return (
            <div>
                <h2>{this.props.name}</h2>
                <button onClick={this.handleClick}>
                    {toggle}
                </button>
                {myInsructions}

            </div>
        );

    }
}
// Recipe.propTypes = {
//     recipe: PropTypes.object,
// };