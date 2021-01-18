import React, { Component } from 'react';

import Header from '../../components/Header';
import SearchEmojis from '../../components/SearchEmojis';
import EmojiList from '../../components/EmojiList';

class EmojiLike extends Component {

    constructor(props){
        super(props);

        this.state = { 
            search: '',
            data: [],
            filter: []
        }
    }

    handleSearchChange = event => {
        this.setState({ search: event.target.value}, () => {
            this.handleFilterEmojis();
        });
    }

    handleFilterEmojis = () => {
        const { search, data} = this.state;

        const store = data.filter( emoji => emoji.unicodeName.includes(search));
        this.setState({filter: store});
    }

     componentDidMount() {
    }

    render() {
        const { filter, search, data} = this.state;
        return (
            <div>
                <Header />
                <SearchEmojis SearchChange={ this.handleSearchChange } />
                <EmojiList data={( filter.length === 0 && search === '' ) ? data : filter}  />
            </div>
        )
    }
}

export default EmojiLike;