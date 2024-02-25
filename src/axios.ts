import axios, { AxiosInstance } from 'axios';

type TranslationResponse = {
  translation: string;
}
// ref: https://github.com/dtellz/languagewire-api/blob/master/server/exceptions/handler.py
type TranslationError = {
    status: 'error';
    statusCode: number;
    errorType?: string; // Optional, as it might not be present in all errors
    message: string;
};

// const baseURL = 'http://localhost:8000';
const baseURL = 'https://languagewire-api.onrender.com';

// Setting withCredentials at the Axios instance level
const APICall: AxiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true,
});

export { APICall, type TranslationResponse, type TranslationError };
