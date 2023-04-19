import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    Stack,
    ThemeProvider,
} from '@mui/material'

import PoppinsRegular from '../assets/fonts/Poppins-Regular.ttf'
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'

const theme = createTheme({
    typography: {
        fontFamily: '"Poppings", sans-serif',
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-display: swap;
              font-weight: 400;
              src: local('Poppins'), local('Poppins-Regular'), url(${PoppinsRegular}) format('ttf');
            }
            @font-face {
                font-family: 'Poppins';
                font-style: normal;
                font-display: swap;
                font-weight: 800;
                src: local('Poppins'), local('Poppins-Bold'), url(${PoppinsBold}) format('ttf');
              }
          `,
        },
    },
    palette: {
        primary: {
            main: 'hsl(259, 100%, 65%)',
        },
        error: {
            main: 'hsl(0, 100%, 67%)',
        },
    },
})

const Form = ({ events: { handleSubmit, invalid }, children }) => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Stack
                    sx={{
                        '--white': 'hsl(0, 0%, 100%)',

                        '--offWhite': 'hsl(0, 0%, 94%)',
                        '--offBlack': 'hsl(0, 0%, 8%)',

                        justifyContent: 'center',
                        paddingBlock: '40px',
                        paddingInline: '5%',
                        minBlockSize: '100vh',
                        bgcolor: 'var(--offWhite)',
                    }}
                >
                    <Container
                        component='main'
                        sx={{
                            borderRadius: '24px',
                            borderEndEndRadius: { xs: '115px', sm: '160px' },
                            paddingBlock: '40px',
                            paddingInlineStart: { md: '50px' },
                            maxInlineSize: {
                                xs: '26rem',
                                sm: '33rem',
                                md: '43rem',
                            },
                            bgcolor: 'var(--white)',
                        }}
                    >
                        <Box
                            component='form'
                            onSubmit={handleSubmit}
                            onInvalid={invalid}
                        >
                            {children}
                        </Box>
                    </Container>
                </Stack>
            </ThemeProvider>
        </>
    )
}

export default Form
