import axios from 'axios';

const BASE_URL = 'https://emoji-api.com';
const PARAM_TOKEN = '?access_key=546099816b719d8f9de0a63eeb91a9949e271983';


export const getAllEmojis = () => {
    axios.get(`${BASE_URL}/emojis${PARAM_TOKEN}`);
}




