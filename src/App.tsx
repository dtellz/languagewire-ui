import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Typography, Container } from '@mui/material';
import { APICall, TranslationResponse, TranslationError } from './axios';
import { isAxiosError } from 'axios';

const languageOptions = [
    'Spanish',
    'German',
    'French',
    'Italian',
    'Danish',
];

const App: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [error, setError] = useState<string>('');

    const fetchTranslation = async (text: string, lang: string): Promise<void> => {
        try {
            const response = await APICall.get<TranslationResponse>(`/translations/translate?text=${text}&lang=${lang.toLowerCase()}`);
            setTranslation(response.data.translation);
            setError(''); // Clear any previous errors
        } catch (error) {
            if (isAxiosError(error) && error.response) {
                const errorResponse = error.response.data as TranslationError;
                setError(
                    errorResponse.errorType === 'ValueError' &&
                    language === '' ?
                    `${errorResponse.errorType} - Select a language to translate` :
                    `${errorResponse.errorType} - Valid Text: Hello. How are you?`
                );
            } else {
                setError('An unexpected error occurred');
            }
        }
      };

    useEffect(() => {
        if (text !== '') {
            const timer = setTimeout(() => {
                fetchTranslation(text, language);
            }, 1000);
    
            return () => clearTimeout(timer);
        }
    }, [text, language]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh'
              }}>
            <Typography variant="h4" gutterBottom>
                LanguageWire Translation
            </Typography>
            <TextField
                fullWidth
                label="Text to translate"
                value={text}
                onChange={(e) => setText(e.target.value)}
                margin="normal"
            />
            <TextField
                select
                fullWidth
                label="Select Language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                margin="normal"
            >
                {languageOptions.map((language) => (
                    <MenuItem key={language} value={language}>
                        {language}
                    </MenuItem>
                ))}
            </TextField>
            <Typography variant="subtitle1" marginTop={2}>
                {error ? `Error: ${error}` : `Translation: ${translation}`}
            </Typography>
        </Container>
    );
};

export default App;
