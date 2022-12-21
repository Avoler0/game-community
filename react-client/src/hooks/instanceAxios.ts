

import axios from 'axios'

const dbURL = 'http://localhost:4000'


const ServerAxios = axios.create({
  baseURL: dbURL,
  headers: {
    'X-Custom-Header': 'foobar'}
});

export { ServerAxios };