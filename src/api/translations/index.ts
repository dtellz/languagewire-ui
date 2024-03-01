import React from 'react';
import { APICall } from '../axios';
import { isAxiosError } from 'axios';

export type TranslationResponse = {
    translation: string;
}
// ref: https://github.com/dtellz/languagewire-api/blob/master/server/exceptions/handler.py
export type TranslationError = {
    status: 'error';
    statusCode: number;
    errorType?: string; // Optional, as it might not be present in all errors
    message: string;
};

export const fetchTranslation = async (
    text: string,
    lang: string,
    setTranslation: React.Dispatch<React.SetStateAction<string>>,
    setError: React.Dispatch<React.SetStateAction<string>>
): Promise<void> => {
    try {
        const response = await APICall.get<TranslationResponse>(`/translations/translate?text=${text}&lang=${lang.toLowerCase()}`);
        setTranslation(response.data.translation);
        setError(''); // Clear any previous errors
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            const errorResponse = error.response.data as TranslationError;
            setError(
                errorResponse.errorType === 'ValueError' &&
                lang === '' ?
                `${errorResponse.errorType} - Select a language to translate` :
                `${errorResponse.errorType} - Valid Text: Hello. How are you?`
            );
        } else {
            setError('An unexpected error occurred');
        }
    }
};
