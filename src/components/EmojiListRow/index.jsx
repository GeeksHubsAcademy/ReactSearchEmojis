import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike } from '../../store/actions/LikeAction';
import './style.css';

class EmojiListRow extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLiked: false,
        }
    }

    componentDidMount() {
        this.setState({isLiked: this.props.isLiked})
    }

    handleAddLike = () => {
        const { addLike, emoji } = this.props;
        this.setState({isLiked: true}, () => {
            addLike(emoji);
        });
    }

    handleDeleteLike = () => {
        this.setState({isLiked: false}, () => {
            
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
    }
}

export default connect(null, mapDispatchToProps)(EmojiListRow);