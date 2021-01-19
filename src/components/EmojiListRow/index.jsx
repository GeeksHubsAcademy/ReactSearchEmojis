import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike, deleteLike } from '../../store/actions/LikeAction';
import './style.css';

class EmojiListRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLiked: false,
        }
    }

    componentDidMount() {
        const { likes, emoji } = this.props;
        const isLiked = likes.some( like => like.slug === emoji.slug);
        this.setState({ isLiked: isLiked});
    } 

    handleAddLike = () => {
        const { addLike, emoji } = this.props;
        this.setState({isLiked: true}, () => {
            addLike(emoji);
        });
    }

    handleDeleteLike = () => {
        const { deleteLike, emoji } = this.props;
        this.setState({isLiked: false}, () => {
            deleteLike(emoji.slug);
        });
    }

    render() {
        return (
            <div 
                className="component-emoji-row copy-to-clipboard"
                data-clipboard-text={this.props.emoji.character}
            >
                <span className="symbol"> { this.props.emoji.character } </span>
                <span className="title"> { this.props.emoji.unicodeName } </span>
                {
                    ( this.state.isLiked )
                    ? <button onClick={() => this.handleDeleteLike()} > DISLIKE </button>
                    : <button onClick={() => this.handleAddLike()} > LIKE </button>
                }
                <span className="info"> Click to copy emoji </span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLike: emoji => dispatch(addLike(emoji)),
        deleteLike: slug => dispatch(deleteLike(slug))
    }
}

const mapStateToProps = (state) => {
    return {
        likes: state.LikeReducer.likes,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmojiListRow);