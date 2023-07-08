import { useRef, useState } from 'react'

const initialState = {
    year: '--',
    month: '--',
    day: '--',
}

const useInitialState = () => {
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

    const invalid = () => setDates(initialState)

    return {
        dates,
        inputRefs,
        handleSubmit,
        invalid,
    }
}

export default useInitialState
