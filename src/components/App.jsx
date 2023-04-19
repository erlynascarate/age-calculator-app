import { useRef, useState } from 'react'

import Data from '../containers/Data'
import DataText from './DataText'

import Form from '../containers/Form'
import FormContainer from '../containers/FormContainer'
import FormInput from './FormInput'
import FormDivider from './FormDivider'

const initialState = {
    year: '--',
    month: '--',
    day: '--',
}

const App = () => {
    const [dates, setDates] = useState(initialState)

    const inputRefs = useRef({})

    const handleSubmit = (event) => {
        event.preventDefault()

        const yearEntered = event.target.year.value
        const monthEntered = event.target.month.value
        const dayEntered = event.target.day.value

        const birthdate = new Date(yearEntered, monthEntered - 1, dayEntered)
        const currentDate = new Date()

        const difference = new Date(currentDate - birthdate)

        const year = difference.getFullYear() - 1970
        const month = difference.getMonth()
        const day = difference.getDate() - 1

        setDates({ year, month, day })
    }

    const invalid = () => {
        setDates({
            year: '--',
            month: '--',
            day: '--',
        })
    }

    return (
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
    )
}

export default App
