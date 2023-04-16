import { useState } from 'react'

import Data from '../containers/Data'
import DataText from './DataText'

import Form from '../containers/Form'
import FormContainer from '../containers/FormContainer'
import FormInput from './FormInput'
import FormDivider from './FormDivider'

const App = () => {
    const [dates, setDates] = useState({
        year: '--',
        month: '--',
        day: '--',
    })

    return (
        <Form>
            <FormContainer
                render={(input) => (
                    <FormInput key={input.label} input={input} />
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
