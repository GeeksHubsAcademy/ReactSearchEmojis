import React, { Component } from 'react';

import './style.css';

class SearchEmojis extends Component {

    handleChange = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="component-search-input">
                <input type="text" onChange={ this.handleChange }/>
            </div>
        )
    }
}


export default SearchEmojis;