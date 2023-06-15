import axios from "axios";

const BASE_URL = 'https://6487a5c2beba62972790deef.mockapi.io/contacts';

export const getContacts = async function () {
    console.log('start fetching')
    const data = await axios(BASE_URL);
    console.log('finish fetching')
    console.log('data',data)
    return data
}