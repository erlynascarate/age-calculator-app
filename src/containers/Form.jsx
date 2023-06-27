import {
    Box,
    Container,
    createTheme,
    CssBaseline,
    Stack,
    ThemeProvider,
} from '@mui/material'
import InstallationButton from '../components/InstallationButton'

const theme = createTheme({
    typography: {
        fontFamily: '"Poppins", sans-serif',
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
                            position: 'relative',
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
                        <InstallationButton />
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
