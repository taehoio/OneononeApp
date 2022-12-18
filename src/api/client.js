import axios from 'axios';

const baseURL = 'https://api.taeho.io/oneonone/v1';

const client = axios.create({
  baseURL,
});

export default client;
