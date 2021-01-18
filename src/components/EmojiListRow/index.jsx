import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addLike } from '../../store/actions/LikeAction';
import './style.css';

class EmojiListRow extends Component {

    handleAddLike = () => {
        console.log('LIKE');
        const { addLike, emoji } = this.props;
        addLike(emoji);
    }

    render() {
        return (
            <div 
                className="component-emoji-row copy-to-clipboard"
                data-clipboard-text={this.props.emoji.character}
            >
                <span className="symbol"> { this.props.emoji.character } </span>
                <span className="title"> { this.props.emoji.unicodeName } </span>
                <button onClick={() => this.handleAddLike()} > LIKE / DISLIKE </button>
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