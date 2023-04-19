import { useState } from 'react'
import { TextField } from '@mui/material'

const initialState = { error: false, hpText: false }

const FormInput = ({
    input: { label, placeholder, helperText, max },
    inputRefs,
}) => {
    const [formInput, setFormInput] = useState(initialState)

    const onChange = (event) => {
        const yearRef = inputRefs.current.year
        const monthRef = inputRefs.current.month
        const dayRef = inputRefs.current.day

        const input = event.target
        const isTheInputYearOrMonth = input.name !== dayRef.name

        if (isTheInputYearOrMonth) {
            const date = new Date(yearRef.value, monthRef.value, 1)
            date.setDate(0)

            const days = date.getDate()
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

        const min = 1
        const isAValidDate = date <= max && date >= min && !isNaN(date)
        if (isAValidDate) {
            setFormInput(initialState)
        } else {
            setFormInput({ error: true, hpText: helperText })
        }
    }

    return (
        <TextField
            sx={{ inlineSize: '33%' }}
            error={formInput.error}
            label={label}
            type='number'
            name={label}
            placeholder={placeholder}
            helperText={formInput.hpText}
            onInput={onChange}
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
                min: '1',
                max,
                sx: {
                    paddingBlock: '11px',
                    paddingInline: { sm: '16px' },
                    fontSize: {
                        xs: '1.5rem',
                        sm: '2rem',
                    },
                    fontWeight: '700',
                },
                ref: (el) => (inputRefs.current[label] = el),
            }}
            required
        />
    )
}

export default FormInput
