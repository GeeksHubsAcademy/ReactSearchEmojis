import { GET_EMOJIS } from '../constants/EmojiConstants';

export const getEmojis = (emojis) => {
    return {
        type: GET_EMOJIS,
        payload: emojis
    }
}