import useInitialState from './hooks/useInitialState'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import Form from './containers/Form'
import FormContainer from './containers/FormContainer'
import FormInput from './components/FormInput'
import FormDivider from './components/FormDivider'
import Data from './containers/Data'
import DataText from './components/DataText'

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

const App = () => {
    const { dates, inputRefs, handleSubmit, invalid } = useInitialState()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Form events={{ handleSubmit, invalid }}>
                <FormContainer
                    render={(input) => (
                        <FormInput
                            key={input.label}
                            input={input}
                            inputRefs={inputRefs}
                        />
                    )}
                />
                <FormDivider />
                <Data
                    dates={dates}
                    render={(date) => <DataText key={date.text} date={date} />}
                />
            </Form>
        </ThemeProvider>
    )
}

export default App
