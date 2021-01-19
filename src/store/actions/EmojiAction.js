import { GET_EMOJIS } from '../constants/EmojiConstants';

import axios from 'axios';
import { URL_GET_EMOJIS } from '../../services/endpoints';

export const getEmojis = () => async dispatch => {
    console.log('USE API')
    return await axios.get(URL_GET_EMOJIS)
        .then( api => {
            dispatch({
                type: GET_EMOJIS,
                payload: api.data
            })
        })
        .catch( error => {
            dispatch({
                type: 'ERROR_API',
                payload: error
            })
        })

}