import { useState } from 'react'
import { TextField } from '@mui/material'

const initialState = { error: false, helperText: false }

const FormInput = (props) => {
    const {
        input: { label, placeholder, min, max },
        inputRefs,
    } = props

    const [formInput, setFormInput] = useState(initialState)

    const validate = (event) => {
        const yearRef = inputRefs.current.year
        const monthRef = inputRefs.current.month
        const dayRef = inputRefs.current.day

        const input = event.target
        const isTheInputYearOrMonth = input.name !== dayRef.name

        if (isTheInputYearOrMonth) {
            const date = new Date(yearRef.value, monthRef.value, 1)
            date.setDate(0)

            const days = date.getDate() || 31
            dayRef.max = days
            monthRef.max = 12

            const year = parseInt(yearRef.value)
            const isTheCurrentYear = year === new Date().getFullYear()
            if (isTheCurrentYear) {
                const currentMonth = new Date().getMonth() + 1
                monthRef.max = currentMonth

                const month = parseInt(monthRef.value)
                const isTheCurrentMonth = month === new Date().getMonth() + 1
                if (isTheCurrentMonth) {
                    const currentDay = new Date().getDate()

                    dayRef.max = currentDay
                }
            }
        }

        const date = parseInt(input.value)
        const isAValidDate = date <= max && date >= min && !isNaN(date)
        if (isAValidDate) {
            setFormInput(initialState)
        } else {
            const { validationMessage } = input
            setFormInput({ error: true, helperText: validationMessage })
        }
    }

    const { error, helperText } = formInput

    return (
        <TextField
            onInput={validate}
            sx={{
                pb: { xs: helperText ? 1 : 4, md: 0 },
                inlineSize: '33%',
            }}
            error={error}
            helperText={helperText}
            label={label}
            name={label}
            placeholder={placeholder}
            required
            type='number'
            InputLabelProps={{
                sx: {
                    fontSize: {
                        xs: '1rem',
                        sm: '1.5rem',
                    },
                    fontWeight: '700',
                    textTransform: 'uppercase',
                },
            }}
            inputProps={{
                min,
                max,
                sx: {
                    paddingBlock: '11px',
                    paddingInline: { sm: 2 },
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                    },
                    fontWeight: '700',
                },
                ref: (el) => (inputRefs.current[label] = el),
            }}
            FormHelperTextProps={{
                sx: {
                    mt: { sm: 1 },
                    mx: 0,
                    lineHeight: 1.1,
                },
            }}
        />
    )
}

export default FormInput
