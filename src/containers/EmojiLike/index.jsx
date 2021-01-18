import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import SearchEmojis from '../../components/SearchEmojis';
import EmojiList from '../../components/EmojiList';

class EmojiLike extends Component {

    constructor(props){
        super(props);

        this.state = { 
            search: '',
            filter: []
        }
    }

    handleSearchChange = event => {
        this.setState({ search: event.target.value}, () => {
            this.handleFilterEmojis();
        });
    }

    handleFilterEmojis = () => {
        const { search } = this.state;
        const { likes } = this.props;

        const store = likes.filter( emoji => emoji.unicodeName.includes(search));
        this.setState({filter: store});
    }

    render() {
        const { filter, search } = this.state;
        const { likes } = this.props;
        return (
            <div>
                <Header />
                <SearchEmojis SearchChange={ this.handleSearchChange } />
                <EmojiList 
                    data={( filter.length === 0 && search === '' ) ? likes : filter}
                    isLiked={true}   
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        likes: state.LikeReducer.likes,
    }
}

export default connect(mapStateToProps)(EmojiLike);