import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEmojis } from '../../store/actions/EmojiAction';

import Header from '../../components/Header';
import SearchEmojis from '../../components/SearchEmojis';
import EmojiList from '../../components/EmojiList';

import axios from 'axios';
import { GET_EMOJIS } from '../../services/endpoints';

class EmojiSearch extends Component {

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
        const { emojis } = this.props;

        const store = emojis.filter( emoji => emoji.unicodeName.includes(search));
        this.setState({filter: store});
    }

    componentDidMount() {
        axios.get(GET_EMOJIS).then( api => {
            this.props.getEmojis(api.data);
        });
    }

    render() {
        const { filter, search } = this.state;
        const { emojis } = this.props;
        console.log(this.props);
        return (
            <div>
                <Header />
                <SearchEmojis SearchChange={ this.handleSearchChange } />
                <EmojiList 
                    data={( filter.length === 0 && search === '' ) ? emojis : filter}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        emojis: state.EmojiReducer.emojis, 
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getEmojis: emojis => dispatch(getEmojis(emojis)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiSearch);