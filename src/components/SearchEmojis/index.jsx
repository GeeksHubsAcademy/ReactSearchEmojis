import React, { Component } from 'react';

import './style.css';

class SearchEmojis extends Component {

    render() {
        return (
            <div className="component-search-input">
                <input type="text" onChange={ this.props.SearchChange }/>
            </div>
        )
    }
}


export default SearchEmojis;