import React, { useState, useEffect } from "react";
import { TextField, MenuItem, Typography, Container } from '@mui/material';
import { languageOptions } from '../constants/translations.ts';
import { fetchTranslation } from '../api/translations';

/**
 * `Translations` component is responsible for rendering a user interface to input text for translation,
 * select a target language, and display either the translation result or an error message. It utilizes
 * Material UI components for layout and styling.
 */


export const Translations: React.FC = () => {
    const [text, setText] = useState<string>('');
    const [language, setLanguage] = useState<string>('');
    const [translation, setTranslation] = useState<string>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (text !== '') {
            const timer = setTimeout(() => {
                fetchTranslation(text, language, setTranslation, setError);
            }, 1000);
    
            return () => clearTimeout(timer);
        }
    }, [text, language]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
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
    )
}