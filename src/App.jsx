import useInitialState from './hooks/useInitialState'
import {
    createTheme,
    CssBaseline,
    ThemeProvider,
    useMediaQuery,
} from '@mui/material'
import { useMemo } from 'react'
import Form from './containers/Form'
import FormContainer from './containers/FormContainer'
import FormInput from './components/FormInput'
import FormDivider from './components/FormDivider'
import Data from './containers/Data'
import DataText from './components/DataText'

const App = () => {
    const { dates, inputRefs, handleSubmit, invalid } = useInitialState()

    const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')
    const theme = useMemo(
        () =>
            createTheme({
                typography: {
                    fontFamily: 'Poppins, sans-serif',
                },
                palette: {
                    mode: prefersLightMode ? 'light' : 'dark',
                    primary: {
                        main: 'hsl(259, 100%, 65%)',
                        hover: prefersLightMode
                            ? 'hsl(0, 0%, 8%)'
                            : 'hsl(259, 100%, 55%)',
                    },
                    error: {
                        main: 'hsl(0, 100%, 67%)',
                    },
                    text: {
                        primary: prefersLightMode
                            ? 'hsl(0, 0%, 0%, 87%)'
                            : 'hsl(0, 0%, 88%)',
                    },
                    background: {
                        default: prefersLightMode
                            ? 'hsl(0, 0%, 94%)'
                            : 'hsl(0, 0%, 15%)',
                    },
                },
            }),
        [prefersLightMode]
    )

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
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
