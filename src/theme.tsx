// spotifyTheme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',      // Spotify's dark background
            paper: '#181818',        // Slightly lighter card background
        },
        primary: {
            main: '#1DB954',         // Spotify green
            contrastText: '#fff',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#B3B3B3',    // Light grey text
        },
    },
    typography: {
        fontFamily: 'sofia-pro'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',  // Spotify buttons don’t uppercase text
                    borderRadius: 20,
                    fontWeight: 600,
                },
            },
        },
    },
});

export default theme;
