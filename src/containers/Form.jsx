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
        fontFamily: 'Poppins, sans-serif',
    },
    palette: {
        common: {
            white: 'hsl(0, 0%, 100%)',
        },
        primary: {
            main: 'hsl(259, 100%, 65%)',
            hover: 'hsl(0, 0%, 8%)',
        },
        error: {
            main: 'hsl(0, 100%, 67%)',
        },
        background: {
            default: 'hsl(0, 0%, 94%)',
        },
    },
})

const Form = (props) => {
    const {
        events: { handleSubmit, invalid },
        children,
    } = props

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Stack
                    sx={{
                        justifyContent: 'center',
                        paddingBlock: '40px',
                        paddingInline: '5%',
                        minBlockSize: '100vh',
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
                            bgcolor: 'common.white',
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
