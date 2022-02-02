import axios from 'axios';

const baseURL = 'https://api.staging.taeho.io/oneonone/v1';

const client = axios.create({
  baseURL,
});

export default client;
