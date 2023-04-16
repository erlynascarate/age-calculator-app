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

const colors = {
    white: 'hsl(0, 0%, 100%)',
    offWhite: 'hsl(0, 0%, 94%)',
    lightGrey: 'hsl(0, 0%, 86%)',
    smokeyGrey: 'hsl(0, 1%, 44%)',
    offBlack: 'hsl(0, 0%, 8%)',
}

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

const Form = ({ children }) => {
    return (
        <>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        paddingBlock: '40px',
                        paddingInline: '5%',
                        minBlockSize: '100vh',
                        bgcolor: colors.offWhite,
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
                            bgcolor: colors.white,
                        }}
                    >
                        <Box component='form'>{children}</Box>
                    </Container>
                </Stack>
            </ThemeProvider>
        </>
    )
}

export default Form
