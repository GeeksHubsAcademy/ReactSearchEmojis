import React, { Component } from 'react';

import Header from '../../components/Header';
import SearchEmojis from '../../components/SearchEmojis';
import EmojiList from '../../components/EmojiList';


class EmojiSearch extends Component {

    render() {
        return (
            <div>
                <Header />
                <SearchEmojis />
                <EmojiList />
            </div>
        )
    }
}

export default EmojiSearch;