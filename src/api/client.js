import axios from 'axios';

const baseURL = 'https://1on1.taeho.io/api/v1';

const client = axios.create({
  baseURL,
});

export default client;
