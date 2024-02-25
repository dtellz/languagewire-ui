import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Typography, Container, Grid, Box } from '@mui/material';

const languageOptions = [
    'Spanish',
    'German',
    'French',
    'Italian',
    'Danish',
];

const App: React.FC = () => {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('');
    const [translation, setTranslation] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            // Replace with actual translation fetching logic
            console.log(`Translating "${text}" to ${language.toLowerCase()}`);
            setTranslation(`${text} ${language}`);
        }, 1000);

        return () => clearTimeout(timer);
    }, [text, language]);

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
                Translation: {translation}
            </Typography>
        </Container>
    );
};

export default App;
